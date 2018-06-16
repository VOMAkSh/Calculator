import React, { Component } from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h3
          style={{
            "text-align": "center"
          }}
        >
          Calculator
        </h3>
        <div className="calculator">
          <Calculator />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
