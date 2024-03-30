"use client";
import { useRef, useState } from "react";

import { IoPerson } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "./Button";
import Counter from "./Counter";
import clsx from "clsx";
import useClickOutside from "../hooks/useClickOutside";

interface SelectedType {
  adults: number;
  children: number;
  rooms: number;
}

interface RoomsSelectorProps {
  onConfirm?: (a: SelectedType) => void;
  hideValues?: boolean;
  className?: string;
  value?: SelectedType;
}

const RoomsSelector = ({
  value,
  onConfirm,
  hideValues,
  className,
}: RoomsSelectorProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    value || {
      adults: 1,
      children: 0,
      rooms: 1,
    }
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onButtonClick = () => {
    onConfirm && onConfirm(selected);
    toggleOpen();
  };

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className={clsx("relative w-full", className)} ref={ref}>
      <button
        id="RoomsSelector"
        className="bg-grey-2 rounded-md flex items-center p-3 cursor-pointer w-full h-full"
        onClick={toggleOpen}
        type="button"
      >
        <IoPerson className="mr-2 text-grey-3" />
        <p className={clsx({ hidden: hideValues })}>
          {selected.adults} adults . {selected.children} children .{" "}
          {selected.rooms} room
        </p>
        <p className={clsx("text-text-light", { hidden: !hideValues })}>
          Guests
        </p>
        {isOpen ? (
          <FaChevronUp className="absolute right-3 text-grey-3" />
        ) : (
          <FaChevronDown className="absolute right-3 text-grey-3" />
        )}
      </button>
      <div
        id="HiddenMenu"
        className={clsx(
          "absolute top-14 left-0 p-5 gap-4 w-full flex flex-col bg-white drop-shadow-xl",
          { hidden: !isOpen }
        )}
      >
        <div className="grid grid-cols-4">
          <p className="col-span-2">Adults</p>
          <Counter
            value={selected.adults}
            minValue={1}
            onChange={(newValue: number) =>
              setSelected({ ...selected, adults: newValue })
            }
            className="col-span-2"
          />
        </div>
        <div className="grid grid-cols-4">
          <p className="col-span-2">Children</p>
          <Counter
            value={selected.children}
            onChange={(newValue: number) =>
              setSelected({ ...selected, children: newValue })
            }
            className="col-span-2"
          />
        </div>
        <div className="grid grid-cols-4">
          <p className="col-span-2">Rooms</p>
          <Counter
            value={selected.rooms}
            minValue={1}
            onChange={(newValue: number) =>
              setSelected({ ...selected, rooms: newValue })
            }
            className="col-span-2"
          />
        </div>
        <Button type="button" onClick={onButtonClick}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default RoomsSelector;
