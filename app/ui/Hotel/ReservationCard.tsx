import Image from "next/image";
import SectionTitle from "../Typography/SectionTitle";
import Detail from "../Typography/Detail";
import Button from "../Button";

const ReservationCard = () => {
  const title = "Standard twin ben, Multiple beds";
  const size = "300 sq ft";
  const number_guests = 3;
  const beds = {
    double: 1,
    twin: 1,
  };

  const bedsText = beds?.double && `${beds.double} double bed`;

  return (
    <article className="rounded-md bg-white overflow-hidden">
      <Image
        src="https://placehold.co/400x200/webp"
        width={400}
        height={200}
        alt="Hotel Picture"
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
