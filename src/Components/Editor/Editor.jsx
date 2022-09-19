import React from "react";
import "./Editor.css";
import EditorBox from "./EditorBox";

const Editor = () => {
  return (
    <div id="editor-page">
      <div className="editor-title">
        <h2>Editor</h2>
      </div>
      <div className="editor-table">
        <EditorBox />
      </div>
    </div>
  );
};

export default Editor;
