import { useEffect } from "react";
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

export default function AlbumSongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

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
    <div className="albumSongsMainDiv">
      {/* <h1 className="test">Enjoy listening to {allAlbums[id].title}</h1> */}
      <div className="albumSongsSecondDiv">
        {/* <h1 className="welcome">{sessionUser.username}'s Songs</h1> */}
        <h1 className="welcome">{allAlbums[id].title}'s </h1>

        <div className="songsMainDivAlbum">
          <div>

            {allSongsObjectKeys
              ?.filter(
                (key) =>
                  allSongs[key]?.userId === userInfo.id &&
                  allSongs[key]?.albumId === allAlbums[id].id
              )
              .map((key) => (
                <div className="albumSongListDiv" key={allSongs[key].id}>
                  <ul className="songUl">
                    <li className="songListItem">
                      <i className="fab fa-grav"></i>
                      {allSongs[key].songName}
                    </li>

                    <li className="songListItem">
                      <i className="fab fa-grav"></i>
                      {allSongs[key].artistName}
                    </li>
                  </ul>

                  <AudioPlayer
                    className="audioPlayer"
                    // autoPlay
                    src={allSongs[key] ? allSongs[key].songUrl : null}
                    onPlay={(e) => console.log("onPlay")}
                  />
                  <img
                    className="songImage"
                    src={allSongs[key].imageUrl}
                    alt="Sorry No go on the load yo"
                  />

                  <button
                    className="deleteSongButton2"
                    onClick={() => updateDispatch(allSongs[key])}
                  >
                    <i className="fa fa-music"></i>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
