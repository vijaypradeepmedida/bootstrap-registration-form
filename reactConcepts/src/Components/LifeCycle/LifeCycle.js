import React from "react";

export default class LifeCycle extends React.Component {
  //Mounting Phase start
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  //Mounting Phase End

  // Updating Phase strat
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  // Updating Phase ENd

  //Unmounting phase
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          className="btn btn-secondary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}
