import React from "react";
import {
  ChartComponent,
  Category,
  Tooltip,
  Inject,
  Legend,
  DataLabel,
  ColumnSeries,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { ChartData } from "../../Data/Data";

const BudgetChart = ({ width, height }) => {
  return (
    <>
      <ChartComponent
        id="charts"
        height={height ? height : "250px"}
        width={width ? width : "300px"}
        chartArea={{ border: { width: 0 } }}
        primaryXAxis={{
          valueType: "Category",
          majorGridLines: { width: 0 },
        }}
        primaryYAxis={{
          minimum: 0,
          maximum: 80,
          interval: 20,
          majorGridLines: { width: 1 },
        }}
        tooltip={{
          enable: true,
          header: "${series.yName}",
          format: "${point.x} : ${point.y}",
        }}
        legendSettings={{
          visible: true,
          position: "Bottom",
        }}
      >
        <Inject
          services={[Category, ColumnSeries, Legend, Tooltip, DataLabel]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={ChartData}
            xName="month"
            yName="sales"
            type="Column"
            name="sales"
            legendShape="Circle"
          />
          <SeriesDirective
            dataSource={ChartData}
            xName="month"
            yName="sales1"
            type="Column"
            name="sales1"
            legendShape="Rectangle"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
};

export default BudgetChart;
