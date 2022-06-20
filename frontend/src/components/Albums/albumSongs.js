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
import { FaPlayCircle, FaFolderPlus } from "react-icons/fa";
import CreateSongModal from "../Songs/CreateSongModal";
import CreateSongForm from '../Songs/CreateSongModal/CreateSongForm';
import AudioPlayer from "react-h5-audio-player";

import { Modal } from '../../context/Modal';


export default function AlbumSongs({ userInfo }) {

  const { id } = useParams();
  const [pic] = useState("");
  const [showModal, setShowModal] = useState(false);


  const allSongs = useSelector((state) => state.songs.songs);
  const allAlbums = useSelector((state) => state.albums.albums);



  const allAlbumSongsArray = Object.values(allSongs).filter((song) => song.albumId === +id)
  const allAlbumAlbumsArray = Object.values(allAlbums).filter((song) => song.albumId === +id)




  console.log(allAlbumAlbumsArray)

  const [playing, setPlaying] = useState("");
  const [index, setIndex] = useState(0)

  const playingState = (playing) => {
    // let nowPlaying = allAlbumSongsArray[0].songUrl
    // allAlbumSongsArray.shift()
    setPlaying(playing)
  };
  console.log('allSongs', allSongs)
  console.log("playing", playing)
  return (
    <div className="albumMainPage">

      <div className="sideBar">
        <div className="SideBarInner">
          <NavLinks playing={playing} setPlaying={setPlaying} pic={pic} />
        </div>
      </div>

      <div className="albumSongsListDiv">
        <AlbumCarousel userInfo={userInfo} />
        <div className="albumSongsListInnerDiv" style={{
          // backgroundImage: `url(${album?.imageUrl})`,
        }} >

          {!allAlbumSongsArray.length && (
            <>

              <button className={'createSongEmptyAlbumModalButton'} onClick={() => setShowModal(true)}> Add Songs</button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <CreateSongForm setShowModal={setShowModal} userInfo={userInfo} />
                </Modal>
              )}
            </>
          )}


          <div className="aboveEverySongDiv" >


            <ul className="songTitleAndArtistDiv">
              <li className="songNumberAbove"># </li>
              <div className="titleAndArtistDiv">

              <li className="songListItemAbove">Title</li>
              <li className="songListItemArtist">Artist</li>
              </div>
            </ul>

            <div>
              <h1>Edit</h1>
            </div>

          </div>
          {allAlbumSongsArray.map((song, i) => (

            <div className="everySongDiv" key={i}>
              <ul className="songTitleAndArtistDiv">
                <div className="songNumberandPlayButton">

                <li className="songNumber">{i + 1}</li>
              {playing !== song.songUrl && (

                <button className="songDivButton" onClick={() => playingState(song.songUrl)}>
                  <FaPlayCircle />
                </button>
              )}
              {playing === song.songUrl && (<>

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
                    </div>
                    <div className="titleAndArtistDiv">

                <li className="songListItem">{song.songName}</li>
                <li className="songListItemArtist">{song.artistName}</li>
                    </div>
                {/* <li className="songListItem">{song.albumName}</li> */}

              </ul>
<div>
<div className="songDotsButtonDiv">

              <SongButtonDots songId={song.id} />
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* <AudioPlayerGlobal playing={playing} pic={pic} /> */}
        <div className="globalAudioPlayer">


          <AudioPlayer
            className="audioPlayer"
            src={playing}
            // onPlay={(e) => console.log("onPlay")}
            loop={true}
          />


        </div>
      </div>

    </div>
  );
}
