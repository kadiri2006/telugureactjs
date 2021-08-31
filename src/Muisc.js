
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { strategy } from "workbox-streams";


export default function Music(props) {
  return (
    <div>
      <H5AudioPlayer src={props.pop} onPlay={(e) => console.log("clicked")} />
    </div>
  );
}
