import React from "react";

export class StateClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sushant",
      age: 30,
    };
  }
  render() {
    const handleClick = () => {
      this.setState({ name: "Sush" });
      this.setState((currentState) => {
        return {
          age: currentState.age + 1,
        };
      });
    };
    return (
      <h1 onClick={handleClick} style={{ color: "white" }}>
        Hello {this.state.name} {this.state.age}
      </h1>
    );
  }
}
