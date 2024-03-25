import { MdLocationPin } from "react-icons/md";

const LocationInput = () => {
  return (
    <div className="relative w-full">
      <MdLocationPin className="mr-2 text-grey-3 absolute left-3 top-3 text-xl" />
      <input
        placeholder="Where are you going?"
        className="bg-grey-2 rounded-md w-full h-full py-3 pr-3 pl-10 text-sm placeholder:text-text-light"
      />
    </div>
  );
};

export default LocationInput;
