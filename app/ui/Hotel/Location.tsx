import { MdLocationPin } from "react-icons/md";

const Location = ({ location }) => {
  const { address } = location;

  return (
    <p id="Location" className="pt-3 flex items-center">
      <MdLocationPin className="mr-1.5 text-blue-accent" />
      {address}
    </p>
  );
};

export default Location;
