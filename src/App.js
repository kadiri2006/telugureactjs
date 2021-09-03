import Gallery from "./Gallery";
import "./index.css";
import { useState, useEffect } from "react";
import Singup from "./Singup";
import Signin from "./Signin";

export default function App() {
  const [sign, setsign] = useState(true);
  const [sign2, setsign2] = useState(false);
  const [gallery, setgallery] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("login")).value === true) {
      setsign(false);
      setsign2(false);
      setgallery(true);
    }
  });

  return (
    <div className="flex mx-96">
      {!JSON.parse(localStorage.getItem("login")).value && sign && (
        <Singup sign={setsign} sign2={setsign2} gallery={setgallery} />
      )}
      {sign2 && <Signin sign={setsign} sign2={setsign2} gallery={setgallery} />}
      {gallery && (
        <Gallery sign={setsign} sign2={setsign2} gallery={setgallery} />
      )}
    </div>
  );
}
