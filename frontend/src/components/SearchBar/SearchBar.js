import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory } from "react-router-dom";
import "./index.css";

import { FaPlayCircle } from "react-icons/fa";
import { FcDisplay } from "react-icons/fc";

const SearchBar = ({ playing, setPlaying }) => {
  const allAlbums = Object.values(useSelector((state) => state.albums.albums));
  const allSongs = Object.values(useSelector((state) => state.songs.songs));



  const [searchValue, setSearchValue] = useState("");
  const [songs, setSongs] = useState([]);
  const [pic, setPic] = useState([]);

  const history = useHistory();


  const filteredSongs = allSongs.filter((song, i) => {
    if (searchValue === "") return null;
    else if (
      song.songName.toLowerCase().includes(searchValue.toLowerCase())
    )
      return song;
  })

  const filteredAlbums = allAlbums.filter((album, i) => {
    if (searchValue === "") return null;
    else if (
      album.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      return album;
  })

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
      <div className="searchInputDiv">
        <input
          className="searchInput"
          placeholder="Search..."
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>

      <div className="searchDivWithResults">
        {/* {allSongs
          .filter((song, i) => {
            if (searchValue === "") return null;
            else if (
              song.songName.toLowerCase().includes(searchValue.toLowerCase())
              )
              return song;
            }) */}
            {filteredSongs.length > 1 && (

              <h1 className="searchSongsTitle">Songs</h1>
            )}
          { filteredSongs.map((song, i) => (
            <div className="albumSongListDivSearch" key={i} >

              {playing !== song.songUrl && (
                <div className="searchDivPlayButton" >
                  <button
                    className="searchDivPlayButton"
                    onClick={() => test(song.songUrl, song.imageUrl)}
                  >
                    <h3 className="songButtonH3">
                      <FaPlayCircle />
                    </h3>
                  </button>
                </div>
              )}



              {playing === song.songUrl && (
                <div className="searchDivPlayButton">
                  <button
                    className="songDivButton"
                    onClick={() => test("song.songUrl", "song.imageUrl")}
                    style={{
                      backgroundImage: `url(${allSongs[song]?.imageUrl})`,
                    }}
                  >
                    <h3>
                      <h3 className="songButtonH3">
                        <FcDisplay />
                      </h3>
                    </h3>
                  </button>
                </div>
              )}
              <div className="searchLi">
                <li className="songListItemSearch">{song.songName}</li>

                {/* <li className="songListItemSearch">{song.artistName}</li> */}
              </div>
            </div>
          ))}

{filteredAlbums.length > 1 && (

<h1 className="searchSongsTitle">Albums</h1>
)}
        {filteredAlbums.map((album,i) => (
          <div className="searchAlbumsOuterDiv">
            <div
              href="/Albums/1"
              className="albumDivButton"
              style={{ backgroundImage: `url(${album.imageUrl})` }}
              onClick={() => albumSearchHistoryPush(album.id)}
              key={i}
            >

              {/* <h3 className="albumSearchName"  style={{ backgroundImage: `url(${album.imageUrl})` }}>{album.title}</h3> */}
              <h3 className="albumSearchName" >{album.title}</h3>

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
              <h1 className="emptySearchMessage">End of the line</h1>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchBar;
