import React from "react";
import "./index.css";

export default function Test() {
  let getEvent = (e) => {
    console.log(e.target.value);
  };
  let color ={backgroundColor:"orange"}
  let size ={fontSize:"100px"}

  return (
    <div>
      <button
        onClick={(e) => getEvent(e)}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Button
      </button>
      <div style={{...color,...size}}>
        <h1>this is button</h1>
      </div>
    </div>
  );
}
