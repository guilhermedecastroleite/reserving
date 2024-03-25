import { FaWifi } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

import { Facilities } from "@/app/types";

import Description from "../Typography/Description";
import Detail from "../Typography/Detail";
import SectionTitle from "../Typography/SectionTitle";
interface OverviewProps {
  description: string;
  facilities: Facilities[];
}

const facilitiesOptions = {
  [Facilities.WIFI]: {
    text: "Free wifi",
    icon: FaWifi,
  },
  [Facilities.AC]: {
    text: "Air conditioning",
    icon: FaWind,
  },
  [Facilities.PARKING]: {
    text: "Parking available",
    icon: FaCar,
  },
  [Facilities.BUSINESS]: {
    text: "Business services",
    icon: FaShoppingBag,
  },
  [Facilities.SWIMMING_POOL]: {
    text: "Swimming pool",
    icon: FaSwimmingPool,
  },
  [Facilities.TOP_RATED]: {
    text: "Top rated in area",
    icon: FaThumbsUp,
  },
};

const Overview = ({ description, facilities }: OverviewProps) => {
  return (
    <div id="Overview" className="mt-8 pt-6 pb-10 px-8 bg-white rounded-md">
      <SectionTitle>Overview</SectionTitle>
      <Description className="mt-6">{description}</Description>
      <div id="Divider" className="mt-10 w-full h-px bg-grey-1" />
      <SectionTitle className="mt-6">Top Facilities</SectionTitle>
      <ul id="FacilitiesList" className="mt-6 flex flex-col flex-wrap max-h-24">
        {facilities.map((facility) => (
          <Detail
            key={facility}
            as="li"
            icon={facilitiesOptions[facility].icon}
            className="mt-3"
            iconClassName="text-blue-accent"
          >
            {facilitiesOptions[facility].text}
          </Detail>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
