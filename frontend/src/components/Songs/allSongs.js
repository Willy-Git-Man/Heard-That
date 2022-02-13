import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongsThunk } from "../../store/songs";
// import CreateSongModal from "../CreateSongModal";

import "./songs.css";

export default function AllSongs({ userInfo }) {
  const dispatch = useDispatch();

  const allSongs = useSelector((state) => state.songs.getAllSongs);

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  return (

       <div className="songsDiv">
        {allSongs?.map((song) => (
          <div className="songListDiv" key={song.id}>
            <img
              className="songImage"
              src={song.imageUrl}
              alt="Broken Img Url"
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
          </div>
        ))}
      </div>
  );
}
