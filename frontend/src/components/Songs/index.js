import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteSongThunk, getAllSongsThunk } from "../../store/songs";
import DeleteSong from "./deleteButton";
// import CreateSongModal from "../CreateSongModal";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./songs.css";

export default function MySongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("userInfo:", userInfo);

  const allSongs = useSelector((state) => state.songs.getAllSongs);
  console.log("All Current Songs:", allSongs);

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  const deleteDispatch = (songId) => {
    dispatch(deleteSongThunk(songId));
  };

  return (
    <div className="songsMainDiv">
      <h1 className="songDivTitle">Songs Div</h1>
      {/* <SongFormNavLink /> */}
      {/* <CreateSongModal /> */}

      <div className="songsDiv">
        {allSongs
          ?.filter((song) => song.userId === userInfo.id)
          .map((song) => (
            // <h1>hello</h1>
            <div className="songListDiv" key={song.id}>
              <img
                className="songImage"
                src={song.imageUrl}
                alt="Sorry No go on the load yo"
              />
              <ul className="songUl">

              <div className="audioDiv">

                <AudioPlayer
                  className="audioPlayer"
                  // autoPlay
                  // src={song.songUrl}
                  // url={song.songUrl}
                  src={song ? song.songUrl : null}

                  onPlay={(e) => console.log("onPlay")}
                  />
                </div>



                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {song.songName}
                </li>

                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {song.artistName}
                </li>

                {/* <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {song.songUrl}
                </li> */}
              </ul>
              {/* <DeleteSong /> */}


              <button
                className="deleteSongButton"
                onClick={() => deleteDispatch(song.id)}
              >
                Delete Song
              </button>

              <button
              className="updateSongButton"
                onClick={() => {
                  history.push(`/UpdateSongForm/${song.id}`);
                }}
              >
                Update
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
