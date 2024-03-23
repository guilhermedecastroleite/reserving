"use client";
import clsx from "clsx";
import Datepicker from "../Datepicker";
import RoomSelect from "../Select";
import Button from "../Button";

const SearchForm = ({ className }) => {
  return (
    <form
      className={clsx(
        "mt-6 py-2.5 px-3 bg-white flex flex-row flex-wrap md:flex-nowrap gap-3 rounded-lg drop-shadow-md",
        className
      )}
    >
      <Datepicker />
      <Datepicker />
      <RoomSelect />
      <Button className="w-full md:w-auto min-w-36">Search</Button>
    </form>
  );
};

export default SearchForm;
