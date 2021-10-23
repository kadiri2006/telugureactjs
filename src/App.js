import React from "react";
import Header from "./Header";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import {
  BrowserRouter as Router,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import { Route, Switch } from "react-router-dom";

export default function App() {
  let myName = new URLSearchParams(useLocation().search).get(
    "name"
  ); /* ?name=kadiribharath&name2=ragu */
  let myName2 = new URLSearchParams(useLocation().search).get("name2");
  console.log(new URLSearchParams(useLocation().search).get("name"));

  return (
    <div>
      <Header />
      <Switch>
        <Route exact strict path="/">
          <h1>this is home page</h1>
        </Route>
        <Route exact strict path="/1">
          <Component1 />
        </Route>

        <Route exact strict path="/2">
          <Component2 />
        </Route>
        <Route
          path="/changed"
          render={() => <Querry myName={myName} myName2={myName2} />}
        />
        <Route exact strict path="/3">
          <Component3 />
        </Route>

        <Route exact strict path="/url/:one/:two">
          <Url />
        </Route>

        <Redirect exact strict from="/5" to="/changed" />

        <Route exact strict path="*">
          <h1>this is 404 error</h1>
        </Route>
      </Switch>
    </div>
  );
}
function Querry({ myName, myName2 }) {
  return (
    <div>
      <h1>first querry {myName}</h1>
      <h1>second querry {myName2}</h1>
    </div>
  );
}

function Url() {
  console.log(useParams());
  const { one, two } = useParams();
  return (
    <h1>
      this url param displayed here value are {one}and {two}
    </h1>
  );
}
