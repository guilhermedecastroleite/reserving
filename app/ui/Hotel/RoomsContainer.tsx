import { fetchRooms } from "@/app/lib/data";
import ReservationCard from "../Cards/ReservationCard";

interface RoomsContainerProps {
  hotelId: string;
}

export const RoomsContainerSkeleton = () => (
  <div
    role="status"
    className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    {...[
      Array(6).fill(
        <div
          role="status"
          className="animate-pulse rounded-md h-[25.5rem] bg-zinc-300"
        />
      ),
    ]}
  </div>
);

const RoomsContainer = async ({ hotelId }: RoomsContainerProps) => {
  const rooms = await fetchRooms(hotelId);

  return (
    <div
      id="RoomsContainer"
      className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {rooms.map((room) => (
        <ReservationCard key={room.room_id} room={room} />
      ))}
    </div>
  );
};

export default RoomsContainer;
