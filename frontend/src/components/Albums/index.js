import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAllAlbumsThunk } from "../../store/albums";
import "./albums.css";

export default function MyAlbums({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumKeys = Object.keys(allAlbums);

  const sessionUser = useSelector(state => state.session.user);

  if (userInfo === undefined) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  return (
    <div className="albumsMainDiv">
      <h1 className="welcome">{sessionUser.username}'s Albums</h1>
      <div className="albumSecondDiv">
        {allAlbumKeys
          ?.filter((index) => allAlbums[index]?.userId === userInfo.id)
          .map((index) => (
            <div className="eachAlbumMainDiv" key={allAlbums[index].id}>

              <img
                className="albumImage"
                src={allAlbums[index].imageUrl}
                alt="Sorry No go on the load yo"
              />
                 <h1 className="albumName">{allAlbums[index].title}</h1>
              <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
               <h1>Link</h1>
              </NavLink>

              {/* <ul>
            <li></li>
          </ul> */}
            </div>
          ))}
      </div>
    </div>
  );
}
