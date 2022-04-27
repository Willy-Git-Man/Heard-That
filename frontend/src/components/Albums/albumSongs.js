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
  const allSongsObjectKeys = Object.keys(allSongs);
  const testing = allSongsObjectKeys.filter(
    (el) => allSongs[el].albumId === +id
  );
  console.log("run it", testing);

  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };

  const deleteDispatch = (songId) => {
    dispatch(deleteSongThunk(songId));
  };

  const likeSongDispatch = async (id) => {
    const likedSongPayload = {
      songName: allSongs[id].songName,
      artistName: allSongs[id].artistName,
      songUrl: allSongs[id].songUrl,
      imageUrl: allSongs[id].imageUrl,
      albumId: 3,
      userId: userInfo.id,
    };

    const newSong = await dispatch(addLikedSongThunk(likedSongPayload));
    history.push("/Albums/3");
  };

  return (
    <div className="albumMainPage">
      <div className="sideBar">
        <div className="SideBarInner">

        <NavLinks playing={playing} setPlaying={setPlaying} pic={pic} />
        </div>
      </div>

      <div className="albumSongsListDiv">
        <MyAlbums userInfo={userInfo} />

        {/* {!allSongs[+id]} */}
        <div className="albumSongsListInnerDiv">
          {/* {allSongsObjectKeys
            ?.filter(
              (key) =>
                allSongs[key]?.userId === userInfo.id &&
                allSongs[key]?.albumId === allAlbums[id].id
            ) */}
          {!testing.length > 0 && <h1>Add Songs To Enjoy The Music!</h1>}
          {/* <div className="everySongDivUpper" key={1} alt="Broken Img Url">

            <div className="songTitleAndArtistDiv">
              <div className="songTitleAndArtistDivs">
                <p className="songDescription">Title</p>
                <li className="songListItem">yes</li>
              </div>
              <div className="songTitleAndArtistDivs">
                <p className="songDescription">Artist</p>

                <li className="songListItem">yes</li>
              </div>
            </div>
          </div> */}

          {testing.map((key) => (
            <div className="everySongDiv" key={key} alt="Broken Img Url">
              <div className="songImageAndPlayButton">
                {/* <img
                  className="songImageInAlbum"
                  src={allSongs[key]?.imageUrl}
                  alt="Broken Img Url"
                /> */}
                {playing !== allSongs[key].songUrl && (
                  <button
                    className="songDivButton"
                    onClick={() =>
                      test(allSongs[key].songUrl, allSongs[key].imageUrl)
                    }
style={{ backgroundImage: `url(${allSongs[key]?.imageUrl})`   }}

                  >
                    <h3 className="songButtonH3">
                      {" "}
                      <FaPlayCircle />{" "}
                    </h3>
                  </button>
                )}

                {playing === allSongs[key].songUrl && (
                  <button
                    className="songDivButton"
                    onClick={() =>
                      test("allSongs[key].songUrl", "allSongs[key].imageUrl")
                    }
                  >
                    <h3 className="songButtonH3">
                      {" "}
                      <FcDisplay />{" "}
                    </h3>
                  </button>
                )}
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
        {/* {allSongsObjectKeys.length < 1 && (
          <h1>Hello</h1>
        )} */}
      </div>
      <AudioPlayerGlobal playing={playing} pic={pic} />
    </div>
  );
}
