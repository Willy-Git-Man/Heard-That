import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSongThunk, getAllSongsThunk } from "../../store/songs";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./songs.css";
import UpdateSongModal from "./UpdateSongModal";
import { getAllAlbumsThunk } from "../../store/albums";

export default function MySongs({ userInfo, setShowModal }) {
  const history = useHistory();
  const dispatch = useDispatch();

  if (userInfo === undefined) {
    history.push("/");
  }

  const allSongs = useSelector((state) => state.songs.songs);
  const allSongsObjectKeys = Object.keys(allSongs);

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  const deleteDispatch = (songId) => {
    dispatch(deleteSongThunk(songId));
  };

  if (!allSongsObjectKeys.length) {
    return null;
  } else
    return (
      <div className="songsDiv">
        {allSongsObjectKeys
          ?.filter((key) => allSongs[key]?.userId === userInfo.id)
          .map((key) => (
            <div className="songListDiv" key={allSongs[key].id}>
              <ul className="songUl">
                <li className="songListItem">{allSongs[key].songName}</li>

                <li className="songListItem">{allSongs[key].artistName}</li>
              </ul>

              <AudioPlayer
                className="audioPlayer"
                // autoPlay
                src={allSongs[key] ? allSongs[key].songUrl : null}
                onPlay={(e) => console.log("onPlay")}
              />
              <img
                className="songImage"
                src={allSongs[key].imageUrl}
                alt="Broken Img Url"
              />

              <UpdateSongModal songId={allSongs[key].id} />

              <button
                className="deleteSongButton"
                onClick={() => deleteDispatch(allSongs[key].id)}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          ))}
      </div>
    );
}
