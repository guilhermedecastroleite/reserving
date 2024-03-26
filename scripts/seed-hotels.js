const { db } = require("@vercel/postgres");
const { hotels } = require("../app/lib/mocksHotels.js");
const { v4: uuidv4 } = require("uuid");

async function seedHotels(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "hotels" table if it doesn't exist
    const createHotelsTable = await client.sql`
      CREATE TABLE IF NOT EXISTS hotels (
        hotel_id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        category VARCHAR(255) NOT NULL,
        promotion VARCHAR(255),
        rating_value DECIMAL (2, 1),
        amount_reviews INT,
        country VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        address TEXT,
        latitude DECIMAL(10, 6),
        longitude DECIMAL(10,6),
        facilities VARCHAR(255) ARRAY,
        cover JSON,
        album JSON ARRAY,
        nearby JSON ARRAY
      );
    `;

    console.log(`Created "hotels" table`);

    // Insert data into the "hotels" table
    const insertedHotels = await Promise.all(
      hotels.map(
        (hotel) => client.sql`
        INSERT INTO hotels (hotel_id, name, description, category, promotion, rating_value, amount_reviews, country, city, address, latitude, longitude, facilities, cover, album, nearby)
        VALUES (${hotel.hotelId}, ${hotel.name}, ${hotel.description}, ${hotel.category}, ${hotel.promotion}, ${hotel.rating.rating}, ${hotel.rating.amountReviews}, ${hotel.location.country}, ${hotel.location.city}, ${hotel.location.address}, ${hotel.location.coordinates[0]}, ${hotel.location.coordinates[1]}, ${hotel.facilities}, ${hotel.images.cover}, ${hotel.images.album}, ${hotel.location.nearby})
        ON CONFLICT (hotel_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedHotels.length} hotels`);

    return {
      createHotelsTable,
      hotels: insertedHotels,
    };
  } catch (error) {
    console.error("Error seeding hotels:", error);
    throw error;
  }
}

async function seedRooms(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "rooms" table if it doesn't exist
    const createRoomsTable = await client.sql`
        CREATE TABLE IF NOT EXISTS rooms (
          room_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          hotel_id VARCHAR(255) NOT NULL,
          room_type VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          size VARCHAR(255),
          number_guests INT,
          beds JSON,
          price JSON,
          FOREIGN KEY (hotel_id) REFERENCES hotels(hotel_id)
        );
      `;

    console.log(`Created "rooms" table`);

    const insertedRooms = await Promise.all(
      hotels.map(async (hotel) => {
        const roomPromises = hotel.rooms.map((room) => {
          return client.sql`
            INSERT INTO rooms (room_id, hotel_id, room_type, name, size, number_guests, beds, price)
            VALUES (${uuidv4()}, ${hotel.hotelId}, ${room.roomType}, ${
            room.name
          }, ${room.size}, ${room.number_guests}, ${room.beds}, ${room.price})
            ON CONFLICT (room_id) DO NOTHING;
          `;
        });

        return await Promise.all(roomPromises);
      })
    );

    console.log({ insertedRooms });

    console.log(`Seeded ${insertedRooms.length} hotels`);

    return {
      createRoomsTable,
      rooms: insertedRooms,
    };
  } catch (error) {
    console.error("Error seeding rooms:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedHotels(client);
  await seedRooms(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
