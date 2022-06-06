import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllAlbumsThunk } from "../../store/albums";
import {
  addLikedSongThunk,
  deleteSongThunk,
  getAllSongsThunk,
  updateTestSongThunk,
} from "../../store/songs";
import "./albums.css";
// import { FaGithub } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import "react-h5-audio-player/lib/styles.css";




import NavLinks from "../NavLinks/navLinks";
import MyAlbums from ".";
import UpdateSongModal from "../Songs/UpdateSongModal";
import SongButtonDots from "../Songs/songButtonDots";
import AudioPlayerGlobal from "../NavLinks/audioPlayer";

import { FaPlayCircle } from "react-icons/fa";
import { FcDisplay } from "react-icons/fc";

export default function AlbumSongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsThunk());

    dispatch(getAllSongsThunk());
  }, [dispatch]);
  const { id } = useParams();
  const [playing, setPlaying] = useState("");
  const [pic, setPic] = useState("");

  const allAlbums = useSelector((state) => state.albums.albums);
  const allSongs = useSelector((state) => state.songs.songs);
  // console.log(Object.values(allSongs))
  // const allSongsObjectKeys = Object.keys(allSongs);

  // const allAlbumsObjectKeys = Object.keys(allAlbums).filter(
  //   (el) => allAlbums[el].albumId === +id
  // );


  const albumSongObjectValues = Object.values(allSongs).filter((song) => song.albumId === +id)
  console.log(albumSongObjectValues, allSongs)

  const allAlbumsObjectKeys = Object.keys(allSongs).filter(
    (el) => allSongs[el].albumId === +id
  );

  const albumSongsObject = {}

  for (let i = 0; i < allAlbumsObjectKeys.length; i++) {
    albumSongsObject[i] = albumSongObjectValues[i]
  }

console.log('obj',albumSongsObject)

const allSongsObjectKeys = Object.keys(albumSongsObject)


  console.log('allAlbumObjectKeys',allSongsObjectKeys,)

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
          {!allAlbumsObjectKeys.length && <h1>Add Songs To Enjoy The Music!</h1>}

          {allAlbumsObjectKeys.map((key) => (

            <div className="everySongDiv" key={key} alt="Broken Img Url">
              <div className="songImageAndPlayButton">
                {playing !== allSongs[key].songUrl && (

                  <div className="albumDivPlayButton"
                    style={{
                      backgroundImage: `url(${allSongs[key]?.imageUrl})`,
                    }}
                  >
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
                  </div>
                )}


                {playing === allSongs[key].songUrl && (
                  <div className="albumDivPlayButton"

                    style={{
                      backgroundImage: `url(${allSongs[key]?.imageUrl})`,
                    }}>
                    <button
                      className="songDivButton"
                      onClick={() =>
                        test("allSongs[key].songUrl", "allSongs[key].imageUrl")
                      }
                    >
                      <h3 className="songButtonH3">
                        <FcDisplay />
                      </h3>
                    </button>

                    <button
                      className="prevButton"
                      onClick={() =>
                        test(allSongs[+key - 1].songUrl, allSongs[key].imageUrl)
                      }
                    >
                      <FaArrowCircleLeft />

                    </button>
                    <button
                      className="nextButton"
                      onClick={() =>
                        test(allSongs[+key + 1].songUrl, allSongs[key].imageUrl)
                      }
                    >
                      <FaArrowCircleRight />
                    </button>
                  </div>


                )}

                {/* {playing === allSongs[key].songUrl && (
        <>
            <button
                      className="prevButton"
                      onClick={() =>
                        test(allSongs[+key - 1].songUrl, allSongs[key].imageUrl)
                      }
                    >
                      <FaArrowCircleLeft />

                    </button>
                    <button
                      className="nextButton"
                      onClick={() =>
                        test(allSongs[+key + 1].songUrl, allSongs[key].imageUrl)
                      }
                    >
                      <FaArrowCircleRight />
                    </button>
        </>
      )} */}
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
          ))}
        </div>


      </div>
      <AudioPlayerGlobal playing={playing} pic={pic} />

    </div>
  );
}
