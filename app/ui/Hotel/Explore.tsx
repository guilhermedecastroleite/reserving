import dynamic from "next/dynamic";
import { MdLocationPin } from "react-icons/md";

import SectionTitle from "../Typography/SectionTitle";
import Detail from "../Typography/Detail";
import type { LocationType } from "@/app/types";
import { MapSkeleton } from "../Map";

const Map = dynamic(async () => await import("../Map"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

interface ExploreProps {
  location: LocationType;
}

const Explore = ({ location }: ExploreProps) => {
  const { nearby } = location;

  return (
    <div className="col-span-1">
      <Map location={location} />
      <SectionTitle className="mt-8">Explore the area</SectionTitle>
      <ul id="LocationsList" className="mt-6">
        {nearby.map((place) => (
          <Detail
            key={place.name}
            as="li"
            icon={MdLocationPin}
            className="mt-3"
          >
            {place.name}
          </Detail>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
