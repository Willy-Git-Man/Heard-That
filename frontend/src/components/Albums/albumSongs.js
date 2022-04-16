import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllAlbumSongsThunk, getAllAlbumsThunk } from "../../store/albums";
import {
  deleteSongThunk,
  getAllSongsThunk,
  updateSongThunk,
  updateTestSongThunk,
} from "../../store/songs";
import "./albums.css";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import NavLinks from "../NavLinks/navLinks";
import AlbumButtonDots from "./albumButtonDots";

export default function AlbumSongs({ userInfo}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [playing, setPlaying] = useState("")
  console.log('playing 2:', playing)
  const PlayingContext = createContext()



  const allAlbums = useSelector((state) => state.albums.albums);
  // const allAlbumKeys = Object.keys(allAlbums);
  const allSongs = useSelector((state) => state.songs.songs);
  const allSongsObjectKeys = Object.keys(allSongs);
  const sessionUser = useSelector((state) => state.session.user);

  // useEffect(() => {
  //   dispatch(getAllAlbumSongsThunk());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  if (userInfo === undefined) {
    history.push("/");
  }
// const playbutton = (el) => {
//   setPlaying(el)
// }
  const updateDispatch = (songId) => {
    // songId.albumId = 1

    // allSongs.forEach((song) => {
    //   if (song.albumId === songId) {

    //   }
    // })

    dispatch(updateTestSongThunk(songId));
    // dispatch(deleteSongThunk(songId));

    history.push(`/Albums`);
  };

  if (!allSongsObjectKeys.length) {
    return null;
  }

  return (
    <div className="">
      {/* <h1 className="test">Enjoy listening to {allAlbums[id].title}</h1> */}

      <NavLinks playing={playing}/>
      <div className="albumSongsSecondDiv">
        {/* <h1 className="welcome">{sessionUser.username}'s Songs</h1> */}
        {/* <h1 className="welcome">{allAlbums[id].title} </h1> */}

          <div className="albumSongsListDiv">
            {allSongsObjectKeys
              ?.filter(
                (key) =>
                  allSongs[key]?.userId === userInfo.id &&
                  allSongs[key]?.albumId === allAlbums[id].id
              )
              .map((key) => (
                <div className="albumSongListDiv" key={allSongs[key].id} onClick={console.log('success')}>
                  {/* <AlbumButtonDots /> */}
                  <div className="songUl"style={{ backgroundImage: `url(${allSongs[key].imageUrl})`   }} alt="Broken Img Url" onclick={() => setPlaying(allSongs[key].songUrl)}>
                    <li className="songListItem" >
                      {allSongs[key].songName}
                    </li>

                  {/* <button onclick={playbutton(allSongs[key].songUrl)}>
ggasdfasdfasdfa
                  </button> */}
                    <li className="songListItem">
                      {allSongs[key].artistName}
                    </li>
                  <button className="songDivButton" style={{ backgroundImage: `url(${allSongs[key].imageUrl})`   }}onClick={() => setPlaying(allSongs[key].songUrl)}>Hello Test</button>
                  </div>

                  {/* <AudioPlayer
                    className="audioPlayergg"
                    playing={PlayingContext}
                    // autoPlay
                    src={allSongs[key] ? allSongs[key].songUrl : null}
                    onPlay={() => setPlaying(allSongs[key].songUrl)}
                  /> */}

                  {console.log("playing:",playing)}
                  {/* <img
                    className="songImage"
                    src={allSongs[key].imageUrl}
                    alt="Broken Img Url"
                  /> */}
{/*
                  <button
                    className="deleteSongButton2"
                    onClick={() => updateDispatch(allSongs[key])}
                  >
                    <i className="fa fa-music"></i>
                  </button> */}
                </div>
              ))}
          </div>
      </div>
    </div>
  );
}
