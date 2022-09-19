import React from "react";
import "./ColorPicker.css";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => (
  <ColorPickerComponent
    id={id}
    mode={mode}
    modeSwitcher={false}
    inline
    showButtons={false}
    change={change}
  />
);

const ColorBox = () => {
  return (
    <div
      className="color-tab-holder"
      style={{ backgroundColor: "white", borderRadius: "5px" }}
    >
      <div id="preview"></div>
      <div className="color-box">
        <div>
          <p className="inline-palette">Inline Pallete</p>
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="inline-picker">Inline Picker</p>
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
