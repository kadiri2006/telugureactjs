import { Component, useState } from "react";

export default function Heading(props) {
  let [state, setState] = useState("");
  return (
    <div>
      <h1>from function component + {state}</h1>
      <button
        onClick={() => {
          setState(props.name);
        }}
        className="bg-pink-800"
      >
        Add
      </button>
      <br />
      <button
        onClick={() => {
          setState("");
        }}
        className="bg-pink-800"
      >
        Remove
      </button>
    </div>
  );
}

export class Heading2 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div>
        <h1> from class component +{this.state.value}</h1>
        <button
          onClick={() => {
            this.setState({ value: this.props.name });
          }}
          className="bg-pink-800"
        >
          Add
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ value: "" });
          }}
          className="bg-pink-800"
        >
          Remove
        </button>
      </div>
    );
  }
}
