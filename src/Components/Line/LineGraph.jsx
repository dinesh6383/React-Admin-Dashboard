import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../Data/Data";

const LineGraph = () => {
  return (
    <div
      className="line-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <ChartComponent
        id="line-chart"
        width="100%"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={"#fff"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineGraph;
