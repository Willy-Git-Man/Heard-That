import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./index.css";
import { getAllSongsThunk } from "../../store/songs";
import AudioPlayer from "react-h5-audio-player";
import NavLinks from "../NavLinks/navLinks";

const SearchBar = ({ playing, setPlaying }) => {
  const [searchValue, setSearchValue] = useState("");
  const [songs, setSongs] = useState([]);
  const [pic, setPic] = useState([]);

  // const [playing, setPlaying] = useState("")
  const dispatch = useDispatch();
  const history = useHistory();

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
            <div
              className="albumSongListDivSearch"
              key={song.id}
            >
              {/* <AlbumButtonDots /> */}
              {/* <div
                className="songUlSearch"
                style={{ backgroundImage: `url(${song.imageUrl})` }}
                alt="Broken Img Url"
                // onclick={() => setPlaying(song.songUrl)}
                onClick={() => test(song.songUrl, song.imageUrl)}
              > */}
                <div className="searchLi">

                <li className="songListItem">{song.songName}</li>

                <li className="songListItem">{song.artistName}</li>
                </div>
                <button
                  className="songDivButton"
                  // style={{ backgroundImage: `url(${song.imageUrl})` }}
                  onClick={() => test(song.songUrl, song.imageUrl)}
                >ggg</button>
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
              className=""
              key={album.id}
              onclick={() => albumSearchHistoryPush(album.id)}
            >
              {/* <AlbumButtonDots /> */}
              <div
                className="songUl"
                style={{ backgroundImage: `url(${album.imageUrl})` }}
                alt="Broken Img Url"
                onclick={() => albumSearchHistoryPush(album.id)}
              >
                <div
                  href="/Albums/1"
                  className="songDivButton"
                  style={{ backgroundImage: `url(${album.imageUrl})` }}
                  onClick={() => albumSearchHistoryPush(album.id)}
                ></div>
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
