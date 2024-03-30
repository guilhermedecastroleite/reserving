"use client";
import clsx from "clsx";
import Datepicker from "../Datepicker";
import RoomSelect from "../RoomsSelector";
import Button from "../Button";
import LocationInput from "./LocationInput";
import { addDays } from "date-fns";
import { useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
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

export type State = {
  errors?: {};
  message?: string | null;
};

const SearchForm = ({ className }: SearchFormProps) => {
  const searchParams = useSearchParams();
  const initialUrl = new URLSearchParams(searchParams);

  const searchInitialState = {
    location: initialUrl.get("location") || "",
    startDate: new Date(initialUrl.get("startDate") || ""),
    endDate:
      new Date(initialUrl.get("endDate") || "") || addDays(new Date(), 1),
    errors: {},
  };

  const handleSearch = (prevState: State, formData: FormData) => {
    const params = new URLSearchParams();

    params.set("location", formData.get("location") as string);
    params.set("startDate", formData.get("startDate") as string);
    params.set("endDate", formData.get("endDate") as string);
    params.set("rooms", JSON.stringify(rooms));

    redirect(`search/?${params.toString()}`);
  };

  const [state, formAction] = useFormState(handleSearch, searchInitialState);
  const [rooms, setRooms] = useState(
    JSON.parse(initialUrl.get("rooms") || "") || {
      adults: 1,
      children: 0,
      rooms: 1,
    }
  );

  return (
    <form
      action={formAction}
      className={clsx(
        "mt-6 py-2.5 px-3 h-fit lg:max-h-16 bg-white flex flex-row flex-wrap lg:flex-nowrap gap-3 rounded-lg drop-shadow-md",
        className
      )}
    >
      <LocationInput defaultValue={state.location} />
      <Datepicker
        id="startDate"
        name="startDate"
        placeholder="Check-in date"
        selected={state?.startDate}
      />
      <Datepicker
        id="endDate"
        name="endDate"
        placeholder="Check-out date"
        fromDate={addDays(new Date(), 1)}
        selected={state?.endDate}
      />
      <RoomSelect
        hideValues
        value={rooms}
        onConfirm={(value) => setRooms(value)}
      />
      <Button className="w-full lg:w-auto min-w-36" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
