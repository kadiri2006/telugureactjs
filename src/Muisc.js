import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Music() {
  return (
    <div>
      <H5AudioPlayer
        src={require("./assets/audio/one.mp3").default}
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
}
