import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.css";
import { getAllSongsThunk } from "../../store/songs";


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/songs/");
  //     const responseData = await response.json();
  //     setSongs(responseData.songs);
  //   }
  //   fetchData();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);
  const allSongs = Object.values(useSelector((state) => state.songs.songs));

  const handlePicture = (e) => {
    e.target.src =
      "https://cdn.pixabay.com/photo/2020/07/19/20/48/broken-5421234_1280.png";
  };

console.log(allSongs)
  return (
    <div className="searchBarMainDiv">
      <div>
        <input
          className="searchInput"
          placeholder="Search Users..."
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="searchDivWithResults">

        {allSongs
          .filter((song) => {
            if (searchValue === "") return null;
            else if (song.songName.toLowerCase().includes(searchValue.toLowerCase()))
              return song;
          })
          .map((song) => (
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
    </div>
  );
};
export default SearchBar;
