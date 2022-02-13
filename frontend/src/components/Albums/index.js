import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { deleteAlbumThunk, getAllAlbumSongsThunk, getAllAlbumsThunk } from "../../store/albums";
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
    dispatch(deleteAlbumThunk(album))
    
  }

  console.log(' allAlbumKeys:',  allAlbumKeys)
  if (!allAlbumKeys.length) {
    history.push('/Songs')
    return (
      <h1>error</h1>
    )
  }

  else

  return (
    <div className="albumsMainDiv">
      <h1 className="welcome">{userInfo?.username}'s Albums</h1>


      <div className="albumSecondDiv">
        {allAlbumKeys
          ?.filter((index) => allAlbums[index]?.userId === userInfo.id)
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

              <UpdateAlbumModal  albumId={allAlbums[index]?.id} />

            </div>
          ))}
      </div>
    </div>
  );
}
