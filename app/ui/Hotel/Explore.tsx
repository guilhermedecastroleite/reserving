import dynamic from "next/dynamic";

import SectionTitle from "../Typography/SectionTitle";
import Detail from "../Typography/Detail";
import { LocationType } from "@/app/types";

const Map = dynamic(async () => await import("../Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
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
          <Detail key={place.name} as="li" icon="location" className="mt-3">
            {place.name}
          </Detail>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
