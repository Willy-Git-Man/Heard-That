import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongsThunk } from "../../store/songs";
// import CreateSongModal from "../CreateSongModal";

import "./songs.css";

export default function MySongs({ userInfo }) {
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
            </div>
          ))}
      </div>
      {/* <div className="songsDiv">
        {allSongs?.map((song) => (
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
          </div>
        ))}
      </div> */}
    </div>
  );
}
