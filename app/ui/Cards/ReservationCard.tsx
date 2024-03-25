import Image from "next/image";
import SectionTitle from "../Typography/SectionTitle";
import Detail from "../Typography/Detail";
import Button from "../Button";
import clsx from "clsx";

interface ReservationCardProps {
  className?: string;
}

const ReservationCard = ({ className, ...props }: ReservationCardProps) => {
  const title = "Standard twin ben, Multiple beds";
  const size = "300 sq ft";
  const number_guests = 3;
  const beds = {
    double: 1,
    twin: 1,
  };

  const bedsText = beds?.double && `${beds.double} double bed`;

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
        <SectionTitle>{title}</SectionTitle>
        <div id="RoomDetails" className="mt-4">
          <Detail>{size}</Detail>
          <Detail>{`Sleeps ${number_guests}`}</Detail>
          <Detail>{`${beds.double} double bed and ${beds.twin} bed`}</Detail>
        </div>
        <Button className="mt-6 w-full">Reserve suite</Button>
      </div>
    </article>
  );
};

export default ReservationCard;
