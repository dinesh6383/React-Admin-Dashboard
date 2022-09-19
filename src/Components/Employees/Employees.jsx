import React from "react";
import "./Employees.css";
import EmployeeTable from "./EmployeeTable";

const Employees = () => {
  return (
    <div id="employee-page">
      <div className="employee-title">
        <h2>Employees</h2>
      </div>
      <div className="employee-table">
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Employees;
