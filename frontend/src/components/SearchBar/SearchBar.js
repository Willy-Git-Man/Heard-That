import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { getAllSongsThunk } from "../../store/songs";

const SearchBar = ({ playing, setPlaying }) => {
  const [searchValue, setSearchValue] = useState("");
  const [pic, setPic] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);
  const allSongs = Object.values(useSelector((state) => state.songs.songs));

  // const handlePicture = (e) => {
  //   e.target.src =
  //     "https://cdn.pixabay.com/photo/2020/07/19/20/48/broken-5421234_1280.png";
  // };

  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };

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
            <div
              className="albumSongListDivSearch"
              key={song.id}
              // onClick={console.log("success")}
            >
              {/* <AlbumButtonDots /> */}
              <div
                className="songUl"
                style={{ backgroundImage: `url(${song.imageUrl})` }}
                alt="Broken Img Url"
                onclick={() => setPlaying(song.songUrl)}
              >
                <li className="songListItem">{song.songName}</li>

                <li className="songListItem">{song.artistName}</li>
                <button
                  className="songDivButton"
                  style={{ backgroundImage: `url(${song.imageUrl})` }}
                  onClick={() => test(song.songUrl, song.imageUrl)}
                ></button>
              </div>
            </div>
          ))}

        {allSongs
          .filter((song) => {
            if (searchValue === "") return null;
            else if (
              !song.songName.toLowerCase().includes(searchValue.toLowerCase())
            )
              return song;
          })
          .slice(0, 1)
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
