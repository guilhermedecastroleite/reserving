/*
  Hotel Contract
  id
  name
  descripton {
    title
    text
  }
  stars
  ratings {
    value
    number_reviews
  }
  location {
    country
    city
    address
    geolocation
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

interface HotelTypes {
  params: {
    id: string;
  };
}

const Hotel = ({ params }: HotelTypes) => {
  const id = params?.id;

  return (
    <div className="max-w-screen-xl m-auto">
      <Album />
      <div className="pt-10">
        <Title>Lakeside Motel Waterfront</Title>
        <Review />
        <Location />
        <div className="grid grid-cols-3 gap-8">
          <Overview />
          <Explore />
        </div>
      </div>
      <Rooms />
    </div>
  );
};

export default Hotel;
