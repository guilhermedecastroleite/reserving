import Image from "next/image";
import SectionTitle from "../Typography/SectionTitle";
import Detail from "../Typography/Detail";
import Button from "../Button";
import clsx from "clsx";
import type { QueryResultRow } from "@vercel/postgres";

interface ReservationCardProps {
  room: QueryResultRow;
  className?: string;
}

const ReservationCard = ({
  room,
  className,
  ...props
}: ReservationCardProps) => {
  const { name, size, number_guests, beds } = room;

  const doubleBedText = beds.double ? `${beds.double} double bed` : "";
  const singleBedText = beds.single ? `and ${beds.single} single bed` : "";

  return (
    <article
      className={clsx("rounded-md bg-white overflow-hidden", className)}
      {...props}
    >
      <Image
        src="https://placehold.co/416x208/webp"
        width={0}
        height={0}
        sizes="100vw"
        alt="Hotel Picture"
        style={{ width: "100%", height: "auto" }}
      />
      <div id="RoomInformation" className="p-5">
        <SectionTitle>{name}</SectionTitle>
        <div id="RoomDetails" className="mt-4">
          <Detail>{size}</Detail>
          <Detail>{`Sleeps ${number_guests}`}</Detail>
          <Detail>{`${doubleBedText} ${singleBedText}`}</Detail>
        </div>
        <Button className="mt-6 w-full">Reserve suite</Button>
      </div>
    </article>
  );
};

export default ReservationCard;
