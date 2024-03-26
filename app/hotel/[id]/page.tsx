import Album from "@/app/ui/Hotel/Album";
import Explore from "@/app/ui/Hotel/Explore";
import Location from "@/app/ui/Hotel/Location";
import Overview from "@/app/ui/Hotel/Overview";
import Review from "@/app/ui/Review";
import Rooms from "@/app/ui/Hotel/Rooms";
import Title from "@/app/ui/Typography/Title";
import { fetchHotel } from "@/app/lib/data";

interface HotelTypes {
  params: {
    id: string;
  };
}

const Hotel = async ({ params }: HotelTypes) => {
  const id = params?.id;

  const hotelData = await fetchHotel(id);

  return (
    <div className="max-w-screen-xl m-auto mt-6 px-4 lg:px-12">
      <Album images={hotelData.images} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
        <div className="col-span-2">
          <Title>{hotelData.name}</Title>
          <Review className="mt-3" {...hotelData.rating} />
          <Location location={hotelData.location} />
          <Overview
            description={hotelData.description}
            facilities={hotelData.facilities}
          />
        </div>
        <Explore location={hotelData.location} />
      </div>
      <Rooms hotelId={id} />
    </div>
  );
};

export default Hotel;
