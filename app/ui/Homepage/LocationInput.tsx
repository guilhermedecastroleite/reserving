import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { MdLocationPin } from "react-icons/md";

export type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const LocationInput = ({ className, ...props }: InputProps) => {
  return (
    <div className={clsx("relative w-full", className)}>
      <MdLocationPin className="mr-2 text-grey-3 absolute left-3 top-3 text-xl" />
      <input
        type="input"
        id="location"
        name="location"
        placeholder="Where are you going?"
        className="bg-grey-2 rounded-md w-full h-full py-3 pr-3 pl-10 text-sm placeholder:text-text-light border-none"
        {...props}
      />
    </div>
  );
};

export default LocationInput;
