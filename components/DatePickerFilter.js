import DatePicker from "react-datepicker";
import { Text } from '@nextui-org/react';

import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Filters.module.css'

const DatePickerFilter = ({ label, selectedDate, handleDateChange }) => (
  <div className={styles.datePickerWrapper}>
    <Text h6>{label}</Text>
    <DatePicker
      wrapperClassName={styles.datePicker}
      showIcon
      selected={selectedDate}
      onChange={handleDateChange}
    />
  </div>
);

export default DatePickerFilter;