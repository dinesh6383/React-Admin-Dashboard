import React from "react";
import "./Kanban.css";
import KanbanBox from "./KanbanBox";

const Kanban = () => {
  return (
    <div id="kanban-page">
      <div className="order-title">
        <h2>Kanban</h2>
      </div>
      <div className="kanban-table">
        <KanbanBox />
      </div>
    </div>
  );
};

export default Kanban;
