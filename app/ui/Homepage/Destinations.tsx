import clsx from "clsx";
import Subtitle from "../Typography/Subtitle";
import EditorialCard from "../Cards/EditorialCard";
import { DestinationType } from "@/app/types";

interface DestinationsProps {
  destinations: DestinationType[];
  className?: string;
}

const Destinations = ({ destinations, className }: DestinationsProps) => {
  return (
    <section className={clsx(className)}>
      <Subtitle className="text-[1.75rem]">Enjoy your dream vacation</Subtitle>
      <p className="mt-4 max-w-[50%]">
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <div id="CardsAlbum" className="flex justify-between mt-8 gap-5">
        {destinations.map((destination: DestinationType) => (
          <EditorialCard
            key={destination.title}
            className="w-full"
            {...destination}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
