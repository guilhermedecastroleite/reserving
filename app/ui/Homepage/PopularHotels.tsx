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
      <div id="CardsAlbum" className="flex justify-between mt-8 gap-5">
        {popularHotels.map((hotel: PopularHotelType) => (
          <EditorialCard key={hotel.title} className="w-full" {...hotel} />
        ))}
      </div>
    </section>
  );
};

export default PopularHotels;
