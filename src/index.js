import { StrictMode } from "react";
import ReactDOM from "react-dom";
import TextSlider from "./TextSlider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="center">
      <TextSlider
        id="slider"
        textArray={[
          "This is a text slider with typing effect",
          "This code written in React js",
          "If you like this code, share it"
        ]}
      />
    </div>
  </StrictMode>,
  rootElement
);
