import Description from "../Typography/Description";
import Detail from "../Typography/Detail";
import SectionTitle from "../Typography/SectionTitle";

const Overview = () => {
  const description =
    "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.";

  return (
    <div id="Overview" className="mt-8 pt-6 pb-10 px-8 bg-white rounded-md">
      <SectionTitle>Overview</SectionTitle>
      <Description className="mt-6">{description}</Description>
      <div id="Divider" className="mt-10 w-full h-px bg-grey-1" />
      <SectionTitle className="mt-6">Top Facilities</SectionTitle>
      <ul id="FacilitiesList" className="mt-6 flex flex-col flex-wrap max-h-24">
        <Detail
          as="li"
          icon="wifi"
          className="mt-3"
          iconClassName="text-blue-accent"
        >
          Free Wifi
        </Detail>
        <Detail
          as="li"
          icon="ac"
          className="mt-3"
          iconClassName="text-blue-accent"
        >
          Air Conditioning
        </Detail>
        <Detail
          as="li"
          icon="parking"
          className="mt-3"
          iconClassName="text-blue-accent"
        >
          Parking available
        </Detail>
        <Detail
          as="li"
          icon="business"
          className="mt-3"
          iconClassName="text-blue-accent"
        >
          Business Services
        </Detail>
        <Detail
          as="li"
          icon="swimming-pool"
          className="mt-3"
          iconClassName="text-blue-accent"
        >
          Swimming pool
        </Detail>
        <Detail
          as="li"
          icon="top-rated"
          className="mt-3"
          iconClassName="text-blue-accent"
        >
          Top rated in area
        </Detail>
      </ul>
    </div>
  );
};

export default Overview;
