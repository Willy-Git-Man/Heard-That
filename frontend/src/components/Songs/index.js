import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory} from "react-router-dom";
import { deleteSongThunk, getAllSongsThunk } from "../../store/songs";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./songs.css";
import UpdateSongModal from "../UpdateSongModal";

export default function MySongs({ userInfo, setShowModal }) {
  const history = useHistory();
  const dispatch = useDispatch();

  if (userInfo === undefined) {
    history.push('/')
  }


  const allSongs = useSelector((state) => state.songs.songs);
  const allSongsObjectKeys = Object.keys(allSongs)
  const sessionUser = useSelector(state => state.session.user);




  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  const deleteDispatch = (songId) => {
    dispatch(deleteSongThunk(songId));
  };

  if (!allSongsObjectKeys.length) {
    return null
  }

  else
  return (
    <div className="songsMainDiv">
      <div className="songsDiv">
        <h1 className="welcome">{sessionUser.username}'s Songs</h1>
    {/* <NavLink activeClassName="currentNavRoute" to='/Albums'>{sessionUser.username}'s Albums</NavLink> */}

        {allSongsObjectKeys
          ?.filter((key) => allSongs[key]?.userId === userInfo.id) // filter out keys for correct user songs
          .map((key) => (
            // <h1>hello</h1>
            <div className="songListDiv" key={allSongs[key].id}>
            {/* <NavLink className="albumLink"to={`/Albums/${allSongs[key].albumId}`}>Album</NavLink> */}
              <ul className="songUl">

                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {/* {song.songName} */}
                  {allSongs[key].songName}
                  {/* {allSongs[key].songName} */}


                </li>

                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {allSongs[key].artistName}
                </li>
{/*
                <li className="songListItemUrl">
                  <i className="fab fa-grav"></i>
                  {allSongs[key].songUrl}
                </li> */}
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
                alt="Sorry No go on the load yo"
              />

              <UpdateSongModal songId={allSongs[key].id} />
              {/* <UpdateSongModal /> */}


              <button
                className="deleteSongButton"
                onClick={() => deleteDispatch(allSongs[key].id)}
              >
                <i className="far fa-trash-alt"></i>
              </button>

              {/* <button
                className="updateSongButton"
                onClick={() => {
                  history.push(`/UpdateSongForm/${allSongs[key].id}`);
                }}
              >
                <i className="fas fa-wrench"></i>
              </button> */}

            </div>
          ))}
      </div>
    </div>
  );
}
