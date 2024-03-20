import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ date = new Date(), onChange, ...rest }) => {
  return (
    <ReactDatePicker
      showIcon
      selected={date}
      onChange={onChange}
      dateFormat="MMM dd, yyyy"
      {...rest}
    />
  );
};

export default Datepicker;
