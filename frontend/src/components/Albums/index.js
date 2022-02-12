import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { deleteAlbumThunk, getAllAlbumSongsThunk, getAllAlbumsThunk } from "../../store/albums";
import UpdateAlbumModal from "../UpdateAlbumModal";
import "./albums.css";

export default function MyAlbums({ userInfo }) {
  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumKeys = Object.keys(allAlbums);
 console.log(' allAlbumKeys:',  allAlbumKeys)
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  if (userInfo === undefined) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllAlbumSongsThunk());
  }, [dispatch]);

  const deleteAlbumDispatch = (album) => {
    dispatch(deleteAlbumThunk(album))
  }

  if (!allAlbumKeys.length) {
    return null


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
                 {/* <h1 className="albumName">{allAlbums[index].title}</h1> */}
              <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
               <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
              </NavLink>

              <button
                className="deleteAlbumButton"
                onClick={() => deleteAlbumDispatch(allAlbums[index]?.id)}
              >
                <i className="far fa-trash-alt"></i>
              </button>

              {/* <UpdateSongModal songId={allSongs[key].id} /> */}
              <UpdateAlbumModal  albumId={allAlbums[index]?.id} />

              {/* <ul>
            <li></li>
          </ul> */}
            </div>
          ))}
      </div>
    </div>
  );
}
