import React from "react";
import "./App.css";

function App() {
  let p = <p>this is paragraph tag link to p variable </p>;
  let instyle = <p>observe inline styles in react</p>;
  let color = (
    <p style={{ color: "black", fontSize: "30px" }}>
      this paragraph tag is linked to color variable and used in line css
      properties
    </p>
  ); //use inline styles in react like object
  let babelsyntax = React.createElement(
    "div",
    null,
    React.createElement("p", null, "this is babel conversion"),
    React.createElement(
      "p",
      {
        style: { color: "red", fontSize: "100px" },
      },
      "with two children"
    )
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>hi iam in h1 element</h1>
        {p}
        {color}
        {babelsyntax}
        {instyle}
      </header>
    </div>
  );
}

export default App;
