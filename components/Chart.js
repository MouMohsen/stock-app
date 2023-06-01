import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  legend: "none",
  bar: { groupWidth: "100%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};

const CandleStickChart = ({ filters }) => {
  const [stock, setStock] = useState([]);

  const fetchStockData = async () => {
    try {
      const response = await fetch(
        `/api/stock?startDate=${filters.startDate}&endDate=${filters.endDate}&interval=${filters.interval}&symbol=${filters.symbol}`
      );
      const data = await response.json();

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
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, [filters]);

  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={stock}
      options={options}
    />
  );
};

export default CandleStickChart;
