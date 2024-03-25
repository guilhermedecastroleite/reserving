"use client";
import { useState } from "react";

import Button from "../Button";
import Datepicker from "../Datepicker";
import Subtitle from "../Typography/Subtitle";
import ReservationCard from "../Cards/ReservationCard";
import Select from "../RoomsSelector";

const Rooms = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-10">
      <Subtitle>Available rooms</Subtitle>
      <div
        id="DateContainer"
        className="mt-6 py-2.5 px-3 bg-white flex flex-row flex-wrap md:flex-nowrap gap-3"
      >
        <Datepicker selected={value.startDate} onSelect={handleValueChange} />
        <Datepicker selected={value.endDate} onSelect={handleValueChange} />
        <Select onConfirm={(value) => console.log({ value })} />
        <Button className="w-full md:w-auto min-w-56" type="submit">
          Check Availability
        </Button>
      </div>
      <div
        id="RoomsContainer"
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
      </div>
    </div>
  );
};

export default Rooms;
