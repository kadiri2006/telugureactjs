import "./index.css";

import one from "./assets/audio/one.mp3";
import two from "./assets/audio/two.mp3";
import tho from "./assets/audio/th.mp3";
import four from "./assets/audio/four.mp3";

import { useState } from "react";

import Music from "./Muisc";

export default function Gallery(props) {
  const [songPath, setsongPath] = useState("");
  

  return (
    <div>
      <div className=" grid grid-cols-3  grid-flow-row">
        <div>
          <img
            className="w-96 h-48"
            src={require("./assets/images/1.jpg").default}
          />
          <img
            onClick={() =>
              setsongPath(require("./assets/audio/one.mp3").default)
            }
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
            onClick={() => setsongPath(two)}
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
            onClick={() => setsongPath(tho)}
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
            onClick={() => setsongPath(four)}
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
            onClick={() => setsongPath(one)}
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
            onClick={() => setsongPath(two)}
            className="w-7 h-7 mx-32"
            src={require("./assets/images/1.svg").default}
          />
        </div>
      </div>
      <Music path={songPath} />
      <button
        onClick={() => {
          let loggedIn = JSON.stringify({ value: false });
          localStorage.setItem("login", loggedIn);

          props.sign2(false);
          props.sign(true);
          props.gallery(false);
        }}
        className=" mx-96 styled bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Signout
      </button>
    </div>
  );
}
