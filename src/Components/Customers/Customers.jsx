import React from "react";
import "./Customers.css";
import CustomerTable from "./CustomerTable";

const Customers = () => {
  return (
    <div id="customer-page">
      <div className="customer-title">
        <h2>Customers</h2>
      </div>
      <div className="customer-table">
        <CustomerTable />
      </div>
    </div>
  );
};

export default Customers;
