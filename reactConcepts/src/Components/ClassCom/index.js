import React, { Component } from "react";

export default class ClassCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Count - {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
