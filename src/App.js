import Movie from "./Movie";
import Gallery from "./Gallery";
import Music from "./Muisc";
import Heading, { Heading2 } from "./Heading";
import "./index.css";

export default function App() {
  return (
    <div>
      <div className=" bg-yellow-100">
        <Heading name={"MUSIC GALLERY"} />
      </div>
      <div className=" bg-blue-400">
        <Heading2 name={"MUSIC GALLERY"} />
      </div>

      <Gallery />
      <Music />
    </div>
  );
}
