import React, { Component } from "react";
import Button from "./Button";

export default class CalciButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
      answer: "0"
    };
  }
  handleClick(value) {
    if (value === "=") {
      this.setState({
        value: eval(this.state.value),
        answer: "1"
      });
    } else {
      if (this.state.value == "0") {
        if (value === "+" || value === "-" || value === "*" || value === "/") {
          this.setState({
            value: "Syntax-error"
          });
        } else {
          this.setState({
            value: value
          });
        }
      } else {
        if (this.state.answer === "0") {
          this.setState({
            value: value,
            answer: "1"
          });
        } else {
          this.setState({
            value: this.state.value + value
          });
        }
      }
    }
  }
  handleKeyPress(event) {
    console.log(event.keyCode);
  }
  clearScreen() {
    this.setState({
      value: "0"
    });
  }
  render() {
    var rows = [];
    for (let i = 9; i >= 0; i--) {
      if (i !== 9 && i % 3 === 0) {
        rows.push(<br />);
      }
      if (i === 0) {
        rows.push(
          <Button
            onClick={() => {
              this.clearScreen();
            }}
          >
            C
          </Button>
        );
      }
      rows.push(
        <Button
          onClick={() => {
            this.handleClick(i + "");
          }}
          onKeyPress={() => {
            this.handleKeyPress(event);
          }}
        >
          {i}
        </Button>
      );
      switch (i) {
        case 7: {
          rows.push(
            <Button
              onClick={() => {
                this.handleClick("+");
              }}
            >
              +
            </Button>
          );
          break;
        }
        case 4: {
          rows.push(
            <Button
              onClick={() => {
                this.handleClick("-");
              }}
            >
              -
            </Button>
          );
          break;
        }
        case 1: {
          rows.push(
            <Button
              onClick={() => {
                this.handleClick("*");
              }}
            >
              *
            </Button>
          );
          break;
        }
        case 0: {
          rows.push(
            <Button
              onClick={() => {
                this.handleClick("/");
              }}
            >
              /
            </Button>
          );
          rows.push(
            <Button
              onClick={() => {
                this.handleClick("=");
              }}
            >
              =
            </Button>
          );
        }
      }
    }
    return (
      <div>
        <div className="displayScreen" style={{}}>
          {this.state.value}
        </div>
        {rows}
        <div />
        <div />
      </div>
    );
  }
}
