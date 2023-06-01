import React, { useEffect, useState } from "react";
import DatePickerFilter from "./filters/DatePickerFilter";
import IntervalFilter from "./filters/IntervalFilter";
import { Grid } from "@nextui-org/react";
import styles from '../styles/Filters.module.css'
import SymbolFilter from "./filters/SymbolFilter";

const Filters = ({ onFilterChange }) => {
    const currentDate = new Date();

    const [startDate, setStartDate] = useState(
        new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
    );
    const [endDate, setEndDate] = useState(currentDate);
    const [interval, setInterval] = useState("1d");
    const [symbol, setSymbol] = useState("SPUS");

    useEffect(() => {
        onFilterChange({ startDate, endDate, interval, symbol });
    }, [startDate, endDate, interval, symbol]);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const increaseInterval = (intervalValue) => {
        setInterval(intervalValue);
    };

    const handleSymbolChange = e => {
        let symbol = e.target.value
        if (symbol.length > 3 ) {
            setSymbol(symbol)
        }
    }

    return (
        <Grid.Container className={styles.filters} gap={2} justify="space-around" alignItems="center">
            <Grid>
                <SymbolFilter handleSymbolChange={handleSymbolChange} />
            </Grid>
            <Grid className={styles.dateRangeFilter}>
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
            </Grid>
            <Grid className="interval-filter">
                <IntervalFilter increaseInterval={increaseInterval} />
            </Grid>
        </Grid.Container>
    );
};

export default Filters;
