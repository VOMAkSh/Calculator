import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className="waves-effect waves-light btn"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
