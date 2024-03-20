"use client";
import { useState } from "react";

import Button from "../Button";
import Datepicker from "../Datepicker";
import Subtitle from "../Typography/Subtitle";
import ReservationCard from "./ReservationCard";

const Rooms = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="mt-10">
      <Subtitle>Available rooms</Subtitle>
      <div
        id="DateContainer"
        className="mt-6 py-2.5 px-3 bg-white flex flex-row gap-3"
      >
        <Datepicker value={value} onChange={handleValueChange} />
        <Datepicker value={value} onChange={handleValueChange} />
        <Datepicker value={value} onChange={handleValueChange} />
        <Button className="min-w-56">Check Availability</Button>
      </div>
      <div id="RoomsContainer" className="flex flex-row justify-between mt-4">
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
      </div>
    </div>
  );
};

export default Rooms;
