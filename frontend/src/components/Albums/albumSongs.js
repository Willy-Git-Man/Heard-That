import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllSongsThunk } from "../../store/songs";


import NavLinks from "../NavLinks/navLinks";
import AudioPlayerGlobal from "../NavLinks/audioPlayer";

import "./albums.css";
import "react-h5-audio-player/lib/styles.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcDisplay } from "react-icons/fc";
import { FaPlayCircle } from "react-icons/fa";
import SongButtonDots from "../Songs/songButtonDots";
import AlbumCarousel from "./albumCarousel";






export default function AlbumSongs({ userInfo }) {

  const { id } = useParams();
  const [pic, setPic] = useState("");
  const [playing, setPlaying] = useState("");

  const allSongs = useSelector((state) => state.songs.songs);

  const allSongsArray = Object.values(allSongs)

  const allAlbumSongsArray = allSongsArray.filter((song) => song.albumId === +id)



  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };


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

                <button className="songDivButton" onClick={() => test(song.songUrl, song.imageUrl)}>
                  <FaPlayCircle />
                </button>
              )}


              {playing === song.songUrl && ( <>
                  <button className="songDivButton" onClick={() => test("", song.imageUrl)}  >
                    <FcDisplay />
                  </button>

                  <button
                    className="prevButton" onClick={() => test(allAlbumSongsArray[i - 1].songUrl)}>
                    <FaArrowCircleLeft />
                  </button>

                  <button
                    className="nextButton" onClick={() => test(allAlbumSongsArray[i + 1].songUrl)}>
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
