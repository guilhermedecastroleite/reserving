import Button from "../Button";
import Datepicker from "../Datepicker";
import Subtitle from "../Typography/Subtitle";
import ReservationCard from "../Cards/ReservationCard";
import RoomsSelector from "../RoomsSelector";

import { fetchRooms } from "@/app/lib/data";

interface RoomsProps {
  hotelId: string;
}

const Rooms = async ({ hotelId }: RoomsProps) => {
  const value = {
    startDate: new Date(),
    endDate: new Date(),
  };

  const rooms = await fetchRooms(hotelId);

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
      <div
        id="RoomsContainer"
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {rooms.map((room) => (
          <ReservationCard key={room.room_id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
