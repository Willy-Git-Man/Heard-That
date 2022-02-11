import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getAllAlbumSongsThunk } from "../../store/albums";
import { getAllSongsThunk } from "../../store/songs";
import "./albums.css";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function AlbumSongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumKeys = Object.keys(allAlbums)

  const allSongs = useSelector((state) => state.songs.songs);

  console.log('allAlbums:', allAlbums[1].title)

  const {id} = useParams()




  const allSongsObjectKeys = Object.keys(allSongs)
  const sessionUser = useSelector(state => state.session.user);


  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);



  if (userInfo === undefined) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllAlbumSongsThunk());
  }, [dispatch]);

  return (
    <div className="albumsMainDiv" >
      <h1 className="test">Enjoy listening to {allAlbums[id].title}</h1>
      <div className="albumSecondDiv">




      <div className="songsMainDiv">
      <div className="albumSongsDiv">
        <h1 className="welcome">{sessionUser.username}'s Songs</h1>
        {allSongsObjectKeys
          ?.filter((key) => allSongs[key]?.userId === userInfo.id && allSongs[key]?.albumId === allAlbums[id].id) // filter out keys for correct user songs
          .map((key) => (
            // <h1>hello</h1>
            <div className="songListDiv" key={allSongs[key].id}>
            {/* <NavLink className="albumLink"to={`/Albums/${allSongs[key].albumId}`}>Album</NavLink> */}
              <ul className="songUl">

                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {/* {song.songName} */}
                  {allSongs[key].songName}
                  {/* {allSongs[key].songName} */}


                </li>

                <li className="songListItem">
                  <i className="fab fa-grav"></i>
                  {allSongs[key].artistName}
                </li>

                {/* <li className="songListItemUrl">
                  <i className="fab fa-grav"></i>
                  {allSongs[key].songUrl}
                </li> */}
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

              {/* <UpdateSongModal /> */}


              {/* <button
                className="deleteSongButton"
                onClick={() => deleteDispatch(allSongs[key].id)}
              >
                <i className="far fa-trash-alt"></i>
              </button> */}

              {/* <button
                className="updateSongButton"
                onClick={() => {
                  history.push(`/UpdateSongForm/${allSongs[key].id}`);
                }}
              >
                <i className="fas fa-wrench"></i>
              </button> */}

            </div>
          ))}
      </div>
    </div>






























        {/* {allAlbumKeys
        ?.filter((index) => allAlbums[index]?.userId === userInfo.id)
        .map((index) => (
          <div className="albumUlDiv">
              <NavLink className="albumImageNavLink" to="/Albums/1">
                Link
                </NavLink>

            <img
                  className="albumImage"
                  src={allAlbums[index].imageUrl}
                  alt="Sorry No go on the load yo"
                  />
          <ul className="albumUl">
          <li className="albumListItem">{allAlbums[index].title}</li>
          </ul>


          </div>
        ))
        } */}
      </div>
    </div>
  );
}
