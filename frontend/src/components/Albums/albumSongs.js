import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllSongsThunk } from "../../store/songs";

import MyAlbums from ".";
import NavLinks from "../NavLinks/navLinks";
import AudioPlayerGlobal from "../NavLinks/audioPlayer";

import "./albums.css";
import "react-h5-audio-player/lib/styles.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcDisplay } from "react-icons/fc";
import { FaPlayCircle } from "react-icons/fa";




export default function AlbumSongs({ userInfo }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  const { id } = useParams();
  const [playing, setPlaying] = useState("");
  const [pic, setPic] = useState("");

  const allSongs = useSelector((state) => state.songs.songs);

  const allSongsArray = Object.values(allSongs)

  const allAlbumSongsArray = allSongsArray.filter((song) => song.albumId === +id)



  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };

  // const deleteDispatch = (songId) => {
  //   dispatch(deleteSongThunk(songId));
  // };

  // const likeSongDispatch = async (id) => {
  //   const likedSongPayload = {
  //     songName: allSongs[id].songName,
  //     artistName: allSongs[id].artistName,
  //     songUrl: allSongs[id].songUrl,
  //     imageUrl: allSongs[id].imageUrl,
  //     albumId: 3,
  //     userId: userInfo.id,
  //   };

  //   const newSong = await dispatch(addLikedSongThunk(likedSongPayload));
  //   history.push("/Albums/3");
  // };

  return (
    <div className="albumMainPage">

      <div className="sideBar">
        <div className="SideBarInner">
          <NavLinks playing={playing} setPlaying={setPlaying} pic={pic} />
        </div>
      </div>

      <div className="albumSongsListDiv">
        <MyAlbums userInfo={userInfo} />

        <div className="albumSongsListInnerDiv">

          {!allAlbumSongsArray.length && <h1>Add Songs To Enjoy The Music!</h1>}
          {allAlbumSongsArray.map((song, i) => (
            <div className="everySongDiv">




              {playing !== song.songUrl && (

                <button
                  className="songDivButton"
                  onClick={() =>
                    test(song.songUrl, song.imageUrl)
                  }
                  style={{
                    backgroundImage: `url(${song?.imageUrl})`,
                  }}
                >
                  <h3 className="songButtonH3">
                    <FaPlayCircle />
                  </h3>
                </button>
              )}


              {playing === song.songUrl && (
                <>
                  <div className="songDivButtonActive">
                    <h3 className="songButtonH3">
                      <FcDisplay />
                    </h3>
                  </div>

                  <button
                    className="prevButton"
                    onClick={() =>
                      test(allAlbumSongsArray[i - 1].songUrl)
                    }
                  >
                    <FaArrowCircleLeft />

                  </button>
                  <button
                    className="nextButton"
                    onClick={() =>
                      test(allAlbumSongsArray[i + 1].songUrl)
                    }
                  >
                    <FaArrowCircleRight />
                  </button>
                </>
              )}



              <div className="songTitleAndArtistDiv">
                <div className="songTitleAndArtistDivs">
                  <p className="songDescription">Title</p>
                  <li className="songListItem">{song.songName}</li>
                </div>
                <div className="songTitleAndArtistDivs">
                  <p className="songDescription">Artist</p>

                  <li className="songListItem">{song.artistName}</li>
                </div>
              </div>



            </div>
          ))}

          {/* {allAlbumsObjectKeys.map((key) => (

            <div className="everySongDiv" key={key} alt="Broken Img Url">

              <div className="songImageAndPlayButton">

                <div className="albumDivPlayButton"
                  style={{
                    backgroundImage: `url(${allSongs[key]?.imageUrl})`,
                  }}
                >
                  {playing !== allSongs[key].songUrl && (

                    <button
                      className="songDivButton"
                      onClick={() =>
                        test(allSongs[key].songUrl, allSongs[key].imageUrl)
                      }
                      style={{
                        backgroundImage: `url(${allSongs[key]?.imageUrl})`,
                      }}
                    >
                      <h3 className="songButtonH3">
                        <FaPlayCircle />
                      </h3>
                    </button>
                  )}

                  {playing === allSongs[key].songUrl && (
                    <>
                      <div
                        className="songDivButton"
                        onClick={() =>
                          test("allSongs[key].songUrl", "allSongs[key].imageUrl")
                        }
                      >
                        <h3 className="songButtonH3">
                          <FcDisplay />
                        </h3>
                      </div>

                      <button
                        className="prevButton"
                        onClick={() =>
                          test(allSongs[+key - 1].songUrl)
                        }
                      >
                        <FaArrowCircleLeft />

                      </button>
                      <button
                        className="nextButton"
                        onClick={() =>
                          test(allSongs[+key + 1].songUrl)
                        }
                      >
                        <FaArrowCircleRight />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="songTitleAndArtistDiv">
                <div className="songTitleAndArtistDivs">
                  <p className="songDescription">Title</p>
                  <li className="songListItem">{allSongs[key].songName}</li>
                </div>
                <div className="songTitleAndArtistDivs">
                  <p className="songDescription">Artist</p>

                  <li className="songListItem">{allSongs[key].artistName}</li>
                </div>
              </div>

              <SongButtonDots songId={allSongs[key].id} />
            </div>
          ))} */}
        </div>


      </div>
      <AudioPlayerGlobal playing={playing} pic={pic} />

    </div>
  );
}
