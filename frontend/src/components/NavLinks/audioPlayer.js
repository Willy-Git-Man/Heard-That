import AudioPlayer from "react-h5-audio-player";
import "./navLinks.css";

export default function AudioPlayerGlobal({ playing, pic }) {
  return (
    <div
      className="globalAudioPlayer"
      style={{ backgroundImage: `url(${pic})` }}
    >
      <AudioPlayer
        className="audioPlayer"
        style={{ backgroundImage: `url(${pic})` }}
        src={playing}
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
}
