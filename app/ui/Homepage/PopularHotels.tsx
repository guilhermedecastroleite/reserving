import clsx from "clsx";
import Subtitle from "../Typography/Subtitle";
import { PopularHotelType } from "@/app/types";
import EditorialCard from "../Cards/EditorialCard";

interface PopularHotelsProps {
  popularHotels: PopularHotelType[];
  className?: string;
}

const PopularHotels = ({ popularHotels, className }: PopularHotelsProps) => {
  return (
    <section className={clsx(className)}>
      <Subtitle className="text-[1.75rem]">Popular hotels</Subtitle>
      <div
        id="CardsAlbum"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
      >
        {popularHotels.map((hotel: PopularHotelType) => (
          <EditorialCard key={hotel.title} className="w-full" {...hotel} />
        ))}
      </div>
    </section>
  );
};

export default PopularHotels;
