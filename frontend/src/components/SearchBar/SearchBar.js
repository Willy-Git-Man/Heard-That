import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./index.css";
import { getAllSongsThunk } from "../../store/songs";
import AudioPlayer from "react-h5-audio-player";
import NavLinks from "../NavLinks/navLinks";

import { FaPlayCircle } from "react-icons/fa";
import { FcDisplay } from "react-icons/fc";

const SearchBar = ({ playing, setPlaying }) => {
  const [searchValue, setSearchValue] = useState("");
  const [songs, setSongs] = useState([]);
  const [pic, setPic] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);
  const allSongs = Object.values(useSelector((state) => state.songs.songs));
  const allAlbums = Object.values(useSelector((state) => state.albums.albums));

  const handlePicture = (e) => {
    e.target.src =
      "https://cdn.pixabay.com/photo/2020/07/19/20/48/broken-5421234_1280.png";
  };

  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };

  const albumSearchHistoryPush = (id) => {
    history.push(`/Albums/${id}`);
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
          .filter((song, i) => {
            if (searchValue === "") return null;
            else if (
              song.songName.toLowerCase().includes(searchValue.toLowerCase())
            )
              return song;
          })
          .map((song) => (
            <div className="albumSongListDivSearch" key={song.id}>
              <div className="searchLi">
                <li className="songListItemSearch">{song.songName}</li>

                <li className="songListItemSearch">{song.artistName}</li>
              </div>
              {playing !== song.songUrl && (
                <button
                  className="songDivButton"
                  onClick={() => test(song.songUrl, song.imageUrl)}
                >
                    {/* <i className="fab fa-grav"></i> */}
                    <h3 className="songButtonH3">
                      {" "}
                      <FaPlayCircle />{" "}
                    </h3>
                    {/* AiFillPlayCircle */}
                </button>
              )}

              {playing === song.songUrl && (
                <button
                  className="songDivButton"
                  onClick={() => test("song.songUrl", "song.imageUrl")}
                >
                  <h3>
                    {/* <i className="fab fa-grav"></i> */}
                    <h3 className="songButtonH3">
                      {" "}
                      <FcDisplay />{" "}
                    </h3>
                    {/* AiFillPlayCircle */}
                  </h3>
                </button>
              )}
            </div>
            // </div>
          ))}

        {allAlbums
          .filter((album) => {
            if (searchValue === "") return null;
            else if (
              album.title.toLowerCase().includes(searchValue.toLowerCase())
            )
              return album;
          })
          .map((album) => (
            <div
              href="/Albums/1"
              className="albumDivButton"
              style={{ backgroundImage: `url(${album.imageUrl})` }}
              onClick={() => albumSearchHistoryPush(album.id)}
            >
              <h3 className="albumSearchName">{album.title}</h3>
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
              <h1 className="emptySearchMessage">End of the line</h1>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchBar;
