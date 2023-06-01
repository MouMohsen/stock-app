import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react"

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};

export default function App() {
    const [stock, setStock] = useState([])
    const fetchStockData = () => {
        fetch("/api/stock")
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
      }, [])

  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={stock}
      options={options}
    />
  );
}
