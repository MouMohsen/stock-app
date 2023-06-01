import React, { useState } from "react"

import Filters from "./Filters";
import CandleStickChart from "./Chart";


const StockChart = () => {
  const [filterValues, setFilterValues] = useState(null);

  const handleFilterChange = (filters) => {
    setFilterValues(filters);
  };


  return (
    <>
      <Filters onFilterChange={handleFilterChange} />
      <CandleStickChart filters={filterValues} />
    </>
  );
}

export default StockChart
