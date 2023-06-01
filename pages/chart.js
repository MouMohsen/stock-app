import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react"

import DatePickerComponent from "../components/DatePickerComponent";

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};

export default function App() {
  const currentDate = new Date()

  const [stock, setStock] = useState([])
  const [startDate, setStartDate] = useState(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
  const [endDate, setEndDate] = useState(currentDate);
  const [interval, setInterval] = useState("1d");


  const increaseInterval = intervalValue => setInterval(intervalValue);

  const fetchStockData = () => {
    fetch(`/api/stock?startDate=${startDate}&endDate=${endDate}&interval=${interval}`)
      .then(response => {

        return response.json()
      })
      .then(data => {
        const formattedData = [
          ["Day", "L", "O", "C", "H"],
          ...data.map((item) => [
            item.Date,
            parseFloat(item.Low),
            parseFloat(item.Open),
            parseFloat(item.Close),
            parseFloat(item.High),
          ]),
        ];

        setStock(formattedData);
      })
  }

  useEffect(() => {
    fetchStockData()
  }, [startDate, endDate, interval])

  return (
    <>
      <DatePickerComponent
        label="Start Date"
        selectedDate={startDate}
        handleDateChange={(date) => setStartDate(date)}
      />
      <DatePickerComponent
        label="End Date"
        selectedDate={endDate}
        handleDateChange={(date) => setEndDate(date)}
      />
      <div>
        <button onClick={() => increaseInterval("1d")}>1D</button>
        <button onClick={() => increaseInterval("1wk")}>1W</button>
        <button onClick={() => increaseInterval("1mo")}>1MO</button>
      </div>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        data={stock}
        options={options}
      />
    </>
  );
}
