import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../../Data/Data";

const EmployeeTable = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div
      className="employee-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search]} />
      </GridComponent>
    </div>
  );
};

export default EmployeeTable;
