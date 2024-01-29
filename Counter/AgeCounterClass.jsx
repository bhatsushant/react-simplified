import React from "react";

export class AgeCounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 0,
      name: "",
    };
  }
  render() {
    const increaseAge = () =>
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });

    const decreaseAge = () => {
      if (this.state.age !== 0)
        this.setState((currentState) => {
          return { age: currentState.age - 1 };
        });
    };
    return (
      <>
        <input
          type="text"
          name="inputField"
          id="inputField"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button type="button" onClick={decreaseAge}>
          -
        </button>
        <label htmlFor="">{this.state.age}</label>
        <button type="button" onClick={increaseAge}>
          +
        </button>
        <br />
        <br />
        <div>
          My name is {this.state.name} and my age is {this.state.age}
        </div>
      </>
    );
  }
}
