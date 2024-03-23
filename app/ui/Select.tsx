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

interface RoomSelectProps {
  onConfirm: (a: SelectedType) => void;
}

const RoomSelect = ({ onConfirm }: RoomSelectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onButtonClick = () => {
    onConfirm && onConfirm(selected);
    toggleOpen();
  };

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative w-full" ref={ref}>
      <div
        id="RoomSelect"
        className="bg-grey-2 rounded-md flex items-center p-3 cursor-pointer"
        onClick={toggleOpen}
      >
        <IoPerson className="mr-2" />
        <p>
          {selected.adults} adults . {selected.children} children .{" "}
          {selected.rooms} room
        </p>
        {isOpen ? (
          <FaChevronUp className="absolute right-3" />
        ) : (
          <FaChevronDown className="absolute right-3" />
        )}
      </div>
      <div
        id="HiddenMenu"
        className={clsx(
          "absolute top-14 left-0 p-8 gap-4 w-full flex flex-col bg-white drop-shadow-xl",
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
        <Button onClick={onButtonClick}>Done</Button>
      </div>
    </div>
  );
};

export default RoomSelect;
