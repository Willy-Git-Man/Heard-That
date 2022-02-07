import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteSongThunk, getAllSongsThunk } from "../../store/songs";
import DeleteSong from "./deleteButton";
// import CreateSongModal from "../CreateSongModal";

import "./songs.css";

export default function MySongs({ userInfo }) {

  const history = useHistory()
  console.log("userInfo:", userInfo);

  const allSongs = useSelector((state) => state.songs.getAllSongs);
  console.log("All Current Songs:", allSongs);







  // const el = "will";

  // const songArray = [el, ...allSongs]
  // console.log("All Current Songsffff:", songArray);
  // console.log("All Current Songs:", allSongs);



  // const allSongsObject = { el, ...allSongs };
  // console.log("allSongsObject:", allSongsObject[0]);

  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);


const deleteDispatch = (songId) => {
  dispatch(deleteSongThunk(songId))
}

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
                <li className="songListItem">
                  {" "}
                  <i className="fab fa-grav"></i>
                  {song.songName}
                </li>

                <li className="songListItem">
                  {" "}
                  <i className="fab fa-grav"></i>
                  {song.artistName}
                </li>

                <li className="songListItem">
                  {" "}
                  <i className="fab fa-grav"></i>
                  {song.songUrl}
                </li>
              </ul>
              {/* <DeleteSong /> */}

              <button  onClick={() => {
          history.push(`/UpdateSongForm/${song.id}`);
        }}>Update</button>
              <button className="deleteSongButton" onClick={() => deleteDispatch(song.id)}>
      Delete Song
    </button>
            </div>
          ))}
      </div>
    </div>
  );
}
