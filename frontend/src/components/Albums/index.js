import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {
  deleteAlbumThunk,
  getAllAlbumSongsThunk,
  getAllAlbumsThunk,
} from "../../store/albums";
import { getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../UpdateAlbumModal";
import "./albums.css";

export default function MyAlbums({ userInfo }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);



  const allAlbums = useSelector((state) => state.albums.albums);
  // const allSongs = useSelector((state) => state.songs.songs);

  // const sessionUser = useSelector(state => state.session.user);

  const allAlbumKeys = Object.keys(allAlbums);

  const history = useHistory();

  if (userInfo === undefined) {
    history.push("/");
  }

  // useEffect(() => {
  //   dispatch(getAllAlbumSongsThunk());
  // }, [dispatch]);

  const deleteAlbumDispatch = (album) => {
    // alert("If you deleted an album with songs in it, dont worry! It will reapear when you come back unless you remove all the songs first");
    dispatch(deleteAlbumThunk(album));
  };

  console.log(" allAlbumKeys:", allAlbumKeys);
  if (!allAlbumKeys.length) {
    history.push("/Songs");
    return <h1>error</h1>;
  } else
    return (
      <div className="albumsMainDiv">
        <h1 className="welcome">{userInfo?.username}'s Albums</h1>
        {/* <h1>{allAlbums[1].title}</h1>
        <div className="eachAlbumMainDiv" key={allAlbums[1]?.id}>
          <img
            className="albumImage"
            src={allAlbums[1]?.imageUrl}
            alt="Sorry No go on the load yo"
          />
          <NavLink className="albumImageNavLink" to={`/Albums/${1}`}>
            <h1 className="albumNameLink">{allAlbums[1]?.title}</h1>
          </NavLink>

          <button
            className="deleteAlbumButton"
            onClick={() => deleteAlbumDispatch(allAlbums[1]?.id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>

          <UpdateAlbumModal albumId={allAlbums[1]?.id} />
        </div> */}

        <div className="albumSecondDiv">






        {/* <h1>{allAlbums[1].title}</h1> */}
        <div className="eachAlbumMainDiv" key={allAlbums[1]?.id}>
          <img
            className="albumImage"
            src={allAlbums[1]?.imageUrl}
            alt="Sorry No go on the load yo"
          />
          <NavLink className="albumImageNavLink" to={`/Albums/${1}`}>
            <h1 className="albumNameLink">{allAlbums[1]?.title}</h1>
          </NavLink>

          {/* <button
            className="deleteAlbumButton"
            onClick={() => deleteAlbumDispatch(allAlbums[1]?.id)}
          >
            <i className="far fa-trash-alt"></i>
          </button> */}

          {/* <UpdateAlbumModal albumId={allAlbums[1]?.id} /> */}
        </div>









          {allAlbumKeys
            ?.filter((index) => allAlbums[index]?.userId === userInfo.id && allAlbums[index]?.id !== 1)
            .map((index) => (
              <div className="eachAlbumMainDiv" key={allAlbums[index]?.id}>
                <img
                  className="albumImage"
                  src={allAlbums[index]?.imageUrl}
                  alt="Sorry No go on the load yo"
                />
                <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
                  <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
                </NavLink>

                <button
                  className="deleteAlbumButton"
                  onClick={() => deleteAlbumDispatch(allAlbums[index]?.id)}
                >
                  <i className="far fa-trash-alt"></i>
                </button>

                <UpdateAlbumModal albumId={allAlbums[index]?.id} />
              </div>
            ))}
        </div>
      </div>
    );
}
