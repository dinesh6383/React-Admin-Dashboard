import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../Data/Data";

const AreaGraph = () => {
  return (
    <div
      className="area-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <ChartComponent
        id="charts"
        width="100%"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        background={"#fff"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((data, index) => {
            return <SeriesDirective key={index} {...data} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default AreaGraph;
