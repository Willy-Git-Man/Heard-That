import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlbumCarousel from "./albumCarousel";
import NavLinks from "../NavLinks/navLinks";
import AudioPlayerGlobal from "../NavLinks/audioPlayer";
import SongButtonDots from "../Songs/songButtonDots";

import "./albums.css";
import "react-h5-audio-player/lib/styles.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcDisplay } from "react-icons/fc";
import { FaPlayCircle } from "react-icons/fa";

export default function AlbumSongs({ userInfo }) {

  const { id } = useParams();
  const [pic] = useState("");
  const [playing, setPlaying] = useState("");

  const allSongs = useSelector((state) => state.songs.songs);
  const allAlbumSongsArray = Object.values(allSongs).filter((song) => song.albumId === +id)

  const playingState = (playing) => { setPlaying(playing)};

  return (
    <div className="albumMainPage">

      <div className="sideBar">
        <div className="SideBarInner">
          <NavLinks playing={playing} setPlaying={setPlaying} pic={pic} />
        </div>
      </div>

      <div className="albumSongsListDiv">
        <AlbumCarousel userInfo={userInfo} />
        <div className="albumSongsListInnerDiv">

          {!allAlbumSongsArray.length && <h1>Add Songs To Enjoy The Music!</h1>}

          {allAlbumSongsArray.map((song, i) => (

            <div className="everySongDiv" key={i}>

              {playing !== song.songUrl && (

                <button className="songDivButton" onClick={() => playingState(song.songUrl)}>
                  <FaPlayCircle />
                </button>
              )}

              {playing === song.songUrl && ( <>

                  <button className="songDivButton" onClick={() => playingState("", song.imageUrl)}  >
                    <FcDisplay />
                  </button>

                  <button
                    className="prevButton" onClick={() => playingState(allAlbumSongsArray[i - 1].songUrl)}>
                    <FaArrowCircleLeft />
                  </button>

                  <button
                    className="nextButton" onClick={() => playingState(allAlbumSongsArray[i + 1].songUrl)}>
                    <FaArrowCircleRight />
                  </button>
                </>)}

              <ul className="songTitleAndArtistDiv">
                  <li className="songListItem">{song.songName}</li>
                  <li className="songListItem">{song.artistName}</li>
              </ul>

              <SongButtonDots songId={song.id} />

            </div>
          ))}
        </div>
      </div>

      <AudioPlayerGlobal playing={playing} pic={pic} />

    </div>
  );
}
