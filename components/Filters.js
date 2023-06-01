import React, { useEffect, useState } from "react";
import DatePickerFilter from "./DatePickerFilter";
import IntervalFilter from "../components/IntervalFilter";

const Filters = ({ onFilterChange }) => {
    const currentDate = new Date();

    const [startDate, setStartDate] = useState(
        new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
    );
    const [endDate, setEndDate] = useState(currentDate);
    const [interval, setInterval] = useState("1d");

    useEffect(() => {
        onFilterChange({ startDate, endDate, interval });
    }, [startDate, endDate, interval]);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const increaseInterval = (intervalValue) => {
        setInterval(intervalValue);
    };

    return (
        <div className="filters">
            <div className="date-range-filter">
                <DatePickerFilter
                    label="Start Date"
                    selectedDate={startDate}
                    handleDateChange={handleStartDateChange}
                />
                <DatePickerFilter
                    label="End Date"
                    selectedDate={endDate}
                    handleDateChange={handleEndDateChange}
                />
            </div>
            <div className="interval-filter">
                <IntervalFilter increaseInterval={increaseInterval} />
            </div>
        </div>
    );
};

export default Filters;
