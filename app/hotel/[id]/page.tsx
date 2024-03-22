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

  const hotelRating = 4.5;
  const hotelAmountReviews = 1200;
  const hotelAddress = "Lorem ipsum road, Tantruim-2322, Melbourne, Australia";

  return (
    <div className="max-w-screen-xl m-auto">
      <Album />
      <div className="grid grid-cols-3 gap-8 pt-10">
        <div className="col-span-2">
          <Title>{hotelData.name}</Title>
          <Review {...hotelData.rating} />
          <Location location={hotelData.location} />
          <Overview />
        </div>
        <Explore location={hotelData.location} />
      </div>
      <Rooms />
    </div>
  );
};

export default Hotel;
