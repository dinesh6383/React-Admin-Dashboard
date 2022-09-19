import React, { useState } from "react";
import "./Calender.css";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../../Data/Data";

const PropertyPane = (props) => {
  return <div style={{ marginTop: "5px" }}>{props.children}</div>;
};

const CalenderBox = () => {
  const [schedule, setSchedule] = useState();

  const change = (args) => {
    schedule.selectedDate = args.value;
    schedule.dataBind();
  };

  const onDragStart = (args) => {
    args.navigation.enable = true;
  };

  return (
    <div
      className="calender-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setSchedule(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
      <PropertyPane>
        <table style={{ width: "100%", background: "white" }}>
          <tbody>
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100%" }}>
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default CalenderBox;
