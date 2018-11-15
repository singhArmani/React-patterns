import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from "./ClassComponent.jsx";
import "./styles.css";

import useMouseLocation from "./useMouseLocation";
import JasperComponent from "./JasperComponent";
import Another from "./Another.jsx";
import RenderProp from "./RenderProp.jsx";
import AnotherC from "./AnotherC.jsx";

import CatMouse from "./CatMouse.jsx";

const AnotherWithMouseTracker = useMouseLocation(Another);

const JasperComponentWithMouseTracker = useMouseLocation(JasperComponent);
function App() {
  return (
    <div className="App">
      <ClassComponent />
      <JasperComponentWithMouseTracker />
      <AnotherWithMouseTracker />
      <RenderProp>{data => <CatMouse {...data} />}</RenderProp>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
