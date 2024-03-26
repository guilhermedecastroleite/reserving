"use client";
import { DayPicker, useInput } from "react-day-picker";
import { FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

import "react-day-picker/dist/style.css";
import useClickOutside from "../hooks/useClickOutside";
import { useRef, useState } from "react";
import clsx from "clsx";

interface DatepickerProps {
  selected: Date | undefined;
  onSelect?: (a: Date | undefined) => void;
  placeholder?: string;
  fromDate?: Date;
  className?: string;
}

const Datepicker = ({
  selected,
  onSelect,
  placeholder,
  fromDate,
  className,
}: DatepickerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: selected,
    fromDate: fromDate || new Date(),
    format: "PP",
    required: true,
  });

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className={clsx("relative w-full", className)} ref={ref}>
      <input
        {...inputProps}
        id="RoomSelect"
        className="bg-grey-2 rounded-md w-full h-full py-3 pr-3 pl-10 text-sm placeholder:text-text-light border-none"
        onClick={toggleOpen}
        placeholder={placeholder}
      />
      <FaCalendarAlt className="mr-2 text-grey-3 absolute top-3.5 left-3" />
      {isOpen ? (
        <FaChevronUp className="text-grey-3 absolute top-4 right-3" />
      ) : (
        <FaChevronDown className="text-grey-3 absolute top-4 right-3" />
      )}
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        initialFocus={isOpen}
        style={{
          ...(isOpen ? { visibility: "visible" } : { visibility: "hidden" }),
          position: "absolute",
          backgroundColor: "white",
          margin: 0,
          padding: ".75rem",
          top: "4rem",
          left: 0,
          color: "#1A1A1A",
        }}
        {...dayPickerProps}
      />
    </div>
  );
};

export default Datepicker;
