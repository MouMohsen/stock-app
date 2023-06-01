import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerFilter = ({ label, selectedDate, handleDateChange }) => (
  <>
    <div>{label}</div>
    <DatePicker
      showIcon
      selected={selectedDate}
      onChange={handleDateChange}
    />
  </>
);

export default DatePickerFilter;