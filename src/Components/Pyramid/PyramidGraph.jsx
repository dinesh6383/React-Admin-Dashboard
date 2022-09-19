import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../Data/Data";

const PyramidGraph = () => {
  return (
    <div
      className="pyramid-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <AccumulationChartComponent
        id="pyramid-chart"
        legendSettings={{ background: "white" }}
        tooltip={{ enable: true }}
        background="#fff"
      >
        <Inject
          services={[
            AccumulationDataLabel,
            AccumulationTooltip,
            PyramidSeries,
            AccumulationLegend,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="45%"
            height="80%"
            neckWidth="15%"
            gapRatio={0.03}
            explode
            emptyPointSettings={{ mode: "Drop", fill: "red" }}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default PyramidGraph;
