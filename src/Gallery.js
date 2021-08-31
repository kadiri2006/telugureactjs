import { useState } from "react";
import "./index.css";
import Music from "./Muisc";
import one from "./assets/audio/one.mp3";
import two from "./assets/audio/two.mp3";
import tho from "./assets/audio/th.mp3";
import four from "./assets/audio/four.mp3";

export default function Gallery() {
  let [state, setState] = useState("");
  return (
    <div className=" grid grid-cols-3  grid-flow-row">
      <div>
        <img
          className="w-96 h-48"
          src={require("./assets/images/1.jpg").default}
        />
        <img
          onClick={() => setState(require("./assets/audio/one.mp3").default)}
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
          onClick={() => setState(two)}
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
          onClick={() => setState(tho)}
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
          onClick={() => setState(four)}
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
          onClick={() => setState(one)}
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
          onClick={() => setState(two)}
          className="w-7 h-7 mx-32"
          src={require("./assets/images/1.svg").default}
        />
      </div>
      <Music pop={state} />
      {console.log(state)}
    </div>
  );
}
