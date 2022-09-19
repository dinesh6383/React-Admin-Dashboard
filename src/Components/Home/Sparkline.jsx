import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { SparklineData } from "../../Data/Data";

const Sparkline = () => {
  return (
    <SparklineComponent
      id="line-sparkline"
      height="100px"
      width="200px"
      lineWidth={1}
      valueType="Numeric"
      border={{ width: "1px" }}
      dataSource={SparklineData}
      yName="year"
      xName="income"
      type="Line"
      tooltipSettings={{
        visible: true,
        format: "${year} : income ${income}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default Sparkline;
