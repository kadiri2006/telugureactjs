
import { useState } from "react";
import "./index.css";

import Music from "./Muisc";




export default function Movie() {
  
  
  
  return (
    <div className=" grid grid-cols-3  grid-flow-row">
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/1.jpg").default}
        />
        <img
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/2.jpg").default}
        />
        <img
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/3.jpg").default}
        />
        <img
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/4.jpg").default}
        />
        <img
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/5.jpg").default}
        />
        <img
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/6.jpg").default}
        />
        <img
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      
    </div>
  );
}


