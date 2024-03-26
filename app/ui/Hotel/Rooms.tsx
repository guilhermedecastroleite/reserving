import Button from "../Button";
import Datepicker from "../Datepicker";
import Subtitle from "../Typography/Subtitle";
import RoomsSelector from "../RoomsSelector";
import RoomsContainer, { RoomsContainerSkeleton } from "./RoomsContainer";
import { Suspense } from "react";

interface RoomsProps {
  hotelId: string;
}

const Rooms = ({ hotelId }: RoomsProps) => {
  const value = {
    startDate: new Date(),
    endDate: new Date(),
  };

  return (
    <div className="mt-10">
      <Subtitle>Available rooms</Subtitle>
      <div
        id="DateContainer"
        className="mt-6 py-2.5 px-3 bg-white flex flex-row flex-wrap md:flex-nowrap gap-3"
      >
        <Datepicker selected={value.startDate} />
        <Datepicker selected={value.endDate} />
        <RoomsSelector />
        <Button className="w-full md:w-auto min-w-56" type="submit">
          Check Availability
        </Button>
      </div>
      <Suspense fallback={<RoomsContainerSkeleton />}>
        <RoomsContainer hotelId={hotelId} />
      </Suspense>
    </div>
  );
};

export default Rooms;
