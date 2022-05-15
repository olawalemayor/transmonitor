import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getDateData } from "../services/charts";

const options = {
  hAxis: {},
  vAxis: {
    minValue: 0,
    textPosition: "none",
    gridlines: { color: "transparent" },
  },
  chartArea: { width: "100%", height: "60%" },
  legend: "none",
};

export default function DateChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const entryData = getDateData();
    setData(entryData);
  }, [getDateData]);

  return (
    <div>
      <Chart
        chartType="AreaChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
  );
}
