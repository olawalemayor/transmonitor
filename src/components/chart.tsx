import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import { getChartData } from "../services/charts";

const options = {
  hAxis: { textPosition: "none" },
  vAxis: {
    minValue: 0,
    textPosition: "none",
    gridlines: { color: "transparent" },
  },
  chartArea: { width: "100%", height: "100%" },
  legend: "none",
};

export default function ChartComponent() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const entryData = getChartData();
    setData(entryData);
  }, [getChartData]);
  return (
    <div>
      <Chart
        chartType="AreaChart"
        data={data}
        options={options}
        width="62px"
        height="37px"
      />
    </div>
  );
}
