import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

export default function Component1() {
  console.log(useParams());
  return (
    <div>
      <h1>1 component1</h1>
       
    </div>
  );
}
