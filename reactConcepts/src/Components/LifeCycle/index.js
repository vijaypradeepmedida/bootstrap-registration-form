import React, { Component } from "react";
import LifeCycle from "./LifeCycle";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: false,
    };
  }
  render() {
    return (
      <>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ mount: !this.state.mount })}
        >
          {this.state.mount ? "Component Unmount" : "Component Mounted"}
        </button>
        {this.state.mount && <LifeCycle />}
      </>
    );
  }
}
