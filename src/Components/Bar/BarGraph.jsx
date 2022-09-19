import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../Data/Data";

const BarGraph = () => {
  return (
    <div
      className="area-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <ChartComponent
        id="charts"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background="#fff"
        legendSettings={{ background: "white" }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((data, index) => {
            return <SeriesDirective key={index} {...data} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default BarGraph;
