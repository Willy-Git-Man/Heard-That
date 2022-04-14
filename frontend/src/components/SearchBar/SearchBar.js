import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.css";
import { getAllSongsThunk } from "../../store/songs";
import AudioPlayer from "react-h5-audio-player";

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

  console.log(allSongs);
  return (
    <div className="searchBarMainDiv">
      <div>
        <input
          className="searchInput"
          placeholder="Search Songs..."
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="searchDivWithResults">
        {allSongs
          .filter((song) => {
            if (searchValue === "") return null;
            else if (
              song.songName.toLowerCase().includes(searchValue.toLowerCase())
            )
              return song;
          })
          .map((song) => (
            <div className="songListDivSearch" key={song.id}>
              <ul className="songUl">
                <li className="songListItem">{song.songName}</li>

                <li className="songListItem">{song.artistName}</li>
              </ul>

              <AudioPlayer
                className="audioPlayer"
                // autoPlay
                src={song ? song.songUrl : null}
                onPlay={(e) => console.log("onPlay")}
              />
              <img
                className="songImage"
                src={song.imageUrl}
                alt="Broken Img Url"
              />
            </div>
          ))}


          {allSongs
          .filter((song) => {
            if (searchValue === "") return null;
            else if (
              !song.songName.toLowerCase().includes(searchValue.toLowerCase())
            )
              return song;
          }).slice(0,1)
          .map((song) => (


            <div className="songListDivSearchEmptyResult" key={song.id}>
            <h1 className="emptySearchMessage">No matching results</h1>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchBar;
