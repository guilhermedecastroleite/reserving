import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import type { HotelImages, LocationType } from "../types";

export async function fetchHotel(id: string) {
  noStore();

  try {
    const hotel = await sql`
      SELECT
        hotels.hotel_id,
        hotels.name,
        hotels.description,
        hotels.rating_value,
        hotels.amount_reviews,
        hotels.facilities,
        hotels.country,
        hotels.city,
        hotels.address,
        hotels.latitude,
        hotels.longitude,
        hotels.cover,
        hotels.album,
        hotels.nearby
      FROM hotels
      WHERE
        hotels.hotel_id ILIKE ${`%${id}%`}
    `;

    return {
      id: hotel.rows[0].hotel_id,
      name: hotel.rows[0].name,
      description: hotel.rows[0].description,
      rating: {
        rating: hotel.rows[0].rating_value,
        amountReviews: hotel.rows[0].amount_reviews,
      },
      facilities: hotel.rows[0].facilities,
      location: {
        country: hotel.rows[0].country,
        city: hotel.rows[0].city,
        address: hotel.rows[0].address,
        coordinates: [hotel.rows[0].latitude, hotel.rows[0].longitude],
        nearby: hotel.rows[0].nearby,
      } as LocationType,
      images: {
        cover: hotel.rows[0].cover,
        album: hotel.rows[0].album,
      } as HotelImages,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hotel.");
  }
}

export async function fetchRooms(query: string) {
  noStore();

  try {
    const rooms = await sql`
      SELECT
        rooms.room_id,
        rooms.hotel_id,
        rooms.room_type,
        rooms.name,
        rooms.size,
        rooms.number_guests,
        rooms.beds,
        rooms.price
      FROM rooms
      JOIN hotels ON rooms.hotel_id = hotels.hotel_id
      WHERE
        rooms.hotel_id ILIKE ${`%${query}%`}
      ORDER BY rooms.name
    `;

    return rooms.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch rooms.");
  }
}

export async function fetchHotelList(params: any) {
  noStore();

  console.log({ params });

  const category = params?.category || "";
  const property = params?.property || "";
  const country = params?.country || "";
  const rating = params?.rating || 0;
  const budget = params?.budget.split(",").map(Number);

  try {
    const hotels = await sql`
      SELECT
        hotels.hotel_id,
        hotels.name,
        hotels.description,
        hotels.category,
        hotels.rating_value,
        hotels.amount_reviews,
        hotels.facilities,
        hotels.country,
        hotels.city,
        hotels.address,
        hotels.latitude,
        hotels.longitude,
        hotels.cover,
        hotels.promotion,
        (
          SELECT ROW_TO_JSON(t) AS rating
          FROM (SELECT rating_value as rating, amount_reviews) AS t
        ) AS rating,
        (
          SELECT 
            rooms.price
          FROM rooms
          WHERE
            rooms.hotel_id = hotels.hotel_id
          ORDER BY price->>'discounted' ASC
          LIMIT 1
        ) AS price
        FROM hotels
        WHERE
          hotels.name ILIKE ${`%${property}%`} AND
          hotels.country ILIKE ${`%${country}%`} AND
          hotels.category ILIKE ${`%${category}%`} AND
          hotels.rating_value > ${rating}
    `;

    return hotels.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch rooms.");
  }
}
