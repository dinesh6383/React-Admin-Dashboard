import React from "react";
import "./Order.css";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <div id="order-page">
      <div className="order-title">
        <h2>Orders</h2>
      </div>
      <div className="order-table">
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;
