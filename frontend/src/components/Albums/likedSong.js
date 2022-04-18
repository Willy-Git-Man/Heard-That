import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllAlbumsThunk } from "../../store/albums";
import { addLikedSongThunk, deleteSongThunk, getAllSongsThunk, updateTestSongThunk } from "../../store/songs";
import "./albums.css";

import "react-h5-audio-player/lib/styles.css";
import NavLinks from "../NavLinks/navLinks";
import MyAlbums from ".";
import UpdateSongModal from "../Songs/UpdateSongModal";

export default function AlbumSongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [playing, setPlaying] = useState("");
  const [pic, setPic] = useState("");

  const allAlbums = useSelector((state) => state.albums.albums);
  const allSongs = useSelector((state) => state.songs.songs);
  const allSongsObjectKeys = Object.keys(allSongs);

  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };

  const deleteDispatch = (songId) => {
    dispatch(deleteSongThunk(songId));
  };

  const likeSongDispatch = async () => {

    const likedSongPayload = {
      songName,
      artistName,
      songUrl,
      imageUrl,
      albumId,
      userId: userInfo.id,
    };

    const newSong = await  dispatch(addLikedSongThunk(likedSongPayload));
    if (newSong) {
      setShowModal(false);
      history.push("/Albums/1");
    }
    dispatch(addLikedSongThunk(likedSong));
  };

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  if (userInfo === undefined) {
    history.push("/");
  }

  if (!allSongsObjectKeys.length) {
    return null;
  }

  return (
    <div className="albumMainPage">
      <div className="sideBar">
        <NavLinks playing={playing} setPlaying={setPlaying} pic={pic} />
      </div>
      <div className="albumSongsListDiv">
        <MyAlbums userInfo={userInfo} />
        <div className="albumSongsListInnerDiv">
          {allSongsObjectKeys
            ?.filter(
              (key) =>
                allSongs[key]?.userId === userInfo.id &&
                allSongs[key]?.albumId === allAlbums[id].id
            )
            .map((key) => (
              <div
                className="everySongDiv"
                // style={{ backgroundImage: `url(${allSongs[key].imageUrl})` }}
                alt="Broken Img Url"
                onclick={() => setPlaying(allSongs[key].songUrl)}
              >
                <img
                  className="songImageInAlbum"
                  src={allSongs[key]?.imageUrl}
                  alt="Broken Img Url"
                />
                <button
                  className="songDivButton"
                  // style={{
                  //   backgroundImage: `url(${allSongs[key].imageUrl})`,
                  // }}
                  onClick={() =>
                    test(allSongs[key].songUrl, allSongs[key].imageUrl)
                  }
                >
                  {/* <i className="fas fa-user-circle" /> */}
                  <h1 className="playButton">Play</h1>

                  {/* <i className="fab fa-grav"></i> */}
                </button>
                <div>
                  <li className="songListItem">{allSongs[key].songName}</li>

                  <li className="songListItem">{allSongs[key].artistName}</li>
                </div>
                <div>
                <UpdateSongModal songId={allSongs[key].id} />

<button
  className="deleteSongButto"
  onClick={() => deleteDispatch(allSongs[key].id)}
>
  <i className="far fa-trash-alt"></i>
</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
