import React, { useContext } from "react";
import "./App.css";
import { flappy } from "./Context/Context";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Employees from "./Components/Employees/Employees";
import Customers from "./Components/Customers/Customers";
import Calender from "./Components/Calender/Calender";
import Kanban from "./Components/Kanban/Kanban";
import Editor from "./Components/Editor/Editor";
import ColorPicker from "./Components/ColorPicker/ColorPicker";
import Line from "./Components/Line/Line";
import Area from "./Components/Area/Area";
import Bar from "./Components/Bar/Bar";
import Pie from "./Components/Pie/Pie";
import Financial from "./Components/Financial/Financial";
import ColorMapping from "./Components/ColorMapping/ColorMapping";
import Pyramid from "./Components/Pyramid/Pyramid";
import Stacked from "./Components/Stacked/Stacked";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  //These are the state comes from context API...
  const { toggleSidebar } = useContext(flappy);

  return (
    <div id="main-page">
      {toggleSidebar && (
        <div className="side-comp">
          <Sidebar />
        </div>
      )}
      <div className="other-comp">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecommerce" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
