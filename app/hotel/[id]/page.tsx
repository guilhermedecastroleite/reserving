/*
  Hotel Contract
  id
  name
  descripton
  stars
  rating {
    rating
    amountReviews
  }
  location {
    country
    city
    address
    coordinates
    nearby [{
      coordinates,
      name,
    }]
  }
  ammenities {
    wifi
    pets
    parking
    transfer
    ac
    heating
    smokers
    bar
    restaurant
    rooftop
  }
*/

import Album from "@/app/ui/Hotel/Album";
import Explore from "@/app/ui/Hotel/Explore";
import Location from "@/app/ui/Hotel/Location";
import Overview from "@/app/ui/Hotel/Overview";
import Review from "@/app/ui/Review";
import Rooms from "@/app/ui/Hotel/Rooms";
import Title from "@/app/ui/Typography/Title";

const hotelData = {
  id: 12345,
  name: "Lakeside Motel Waterfront",
  description:
    "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.",
  rating: {
    rating: 4.5,
    amountReviews: 1200,
  },
  facilities: [
    "WIFI",
    "AC",
    "PARKING",
    "BUSINESS",
    "SWIMMING_POOL",
    "TOP_RATED",
  ],
  location: {
    country: "Australia",
    city: "Melbourne",
    address: "Lorem ipsum road, Tantruim-2322, Melbourne, Australia",
    coordinates: [-37.851899, 144.95726],
    nearby: [
      {
        coordinates: [-37.84921182088626, 144.9717504447874],
        name: "Albert Park Grand Prix Circuit",
      },
    ],
  },
};

interface HotelTypes {
  params: {
    id: string;
  };
}

const Hotel = ({ params }: HotelTypes) => {
  const id = params?.id;

  return (
    <div className="max-w-screen-xl m-auto mt-6 px-4 lg:px-12">
      <Album />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
        <div className="col-span-2">
          <Title>{hotelData.name}</Title>
          <Review className="mt-3" {...hotelData.rating} />
          {/* @ts-ignore-next-line */}
          <Location location={hotelData.location} />
          <Overview
            description={hotelData.description}
            /* @ts-ignore-next-line */
            facilities={hotelData.facilities}
          />
        </div>
        {/* @ts-ignore-next-line */}
        <Explore location={hotelData.location} />
      </div>
      <Rooms />
    </div>
  );
};

export default Hotel;
