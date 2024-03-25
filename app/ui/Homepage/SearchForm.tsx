"use client";
import clsx from "clsx";
import Datepicker from "../Datepicker";
import RoomSelect from "../RoomsSelector";
import Button from "../Button";
import LocationInput from "./LocationInput";
import { addDays } from "date-fns";
import { useState } from "react";

interface SearchFormProps {
  className: string;
}

interface SearchParamsType {
  startDate: Date | undefined;
  endDate: Date | undefined;
  guests: {
    adults: number;
    children: number;
    rooms: number;
  } | null;
}

const SearchForm = ({ className }: SearchFormProps) => {
  const [searchParams, setSearchParams] = useState<SearchParamsType>({
    startDate: undefined,
    endDate: undefined,
    guests: null,
  });

  return (
    <form
      className={clsx(
        "mt-6 py-2.5 px-3 h-fit lg:max-h-16 bg-white flex flex-row flex-wrap lg:flex-nowrap gap-3 rounded-lg drop-shadow-md",
        className
      )}
    >
      <LocationInput />
      <Datepicker
        selected={searchParams.startDate}
        onSelect={(value) =>
          setSearchParams({ ...searchParams, startDate: value })
        }
        placeholder="Check-in date"
      />
      <Datepicker
        selected={searchParams.startDate}
        onSelect={(value) =>
          setSearchParams({ ...searchParams, endDate: value })
        }
        placeholder="Check-out date"
        fromDate={addDays(new Date(), 1)}
      />
      <RoomSelect
        hideValues
        onConfirm={(value) =>
          setSearchParams({ ...searchParams, guests: value })
        }
      />
      <Button className="w-full lg:w-auto min-w-36">Search</Button>
    </form>
  );
};

export default SearchForm;
