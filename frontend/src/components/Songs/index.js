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
      {/* <h2 className="songDivTitle">Songs Div</h2> */}
      {/* <SongFormNavLink /> */}
      {/* <CreateSongModal /> */}

      <div className="songsDiv">
        {allSongs
          ?.filter((song) => song.userId === userInfo.id)
          .map((song) => (
            // <h1>hello</h1>
            <div className="songListDiv" key={song.id}>
              <ul className="songUl">

              {/* <div className="audioDiv"> */}

                {/* </div> */}



                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {song.songName}
                </li>

                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {song.artistName}
                </li>

                <li className="songListItemUrl">
                  <i className="fab fa-grav"></i>
                  {song.songUrl}
                </li>
              </ul>
              {/* <DeleteSong /> */}

              <AudioPlayer
                className="audioPlayer"
                // autoPlay
                // src={song.songUrl}
                // url={song.songUrl}
                src={song ? song.songUrl : null}

                onPlay={(e) => console.log("onPlay")}
                />
                <img
                  className="songImage"
                  src={song.imageUrl}
                  alt="Sorry No go on the load yo"
                />

              <button
                className="deleteSongButton"
                onClick={() => deleteDispatch(song.id)}
              >
                {/* Delete */}
                {/* <i class="fas fa-wrench"></i> */}
                <i className="far fa-trash-alt"></i>
              </button>

              <button
              className="updateSongButton"
                onClick={() => {
                  history.push(`/UpdateSongForm/${song.id}`);
                }}
              >
                {/* Update */}
                <i className="fas fa-wrench"></i>

              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
