import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAllAlbumsThunk } from "../../store/albums";
import "./albums.css";

export default function MyAlbums({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumKeys = Object.keys(allAlbums)

  const allSongs = useSelector((state) => state.songs.songs);




  if (userInfo === undefined) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  return (
    <div className="albumsMainDiv">
      <h1 className="test">Hello Album</h1>
      <div className="albumSecondDiv">
        {allAlbumKeys
        ?.filter((index) => allAlbums[index]?.userId === userInfo.id)
        .map((index) => (
          <div className="albumUlDiv" key={allAlbums[index].id}>
              <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
                Link
                </NavLink>

            <img
                  className="albumImage"
                  src={allAlbums[index].imageUrl}
                  alt="Sorry No go on the load yo"
                  />
          <ul className="albumUl">
          <li className="albumListItem" key={index}>{allAlbums[index].title}</li>
          </ul>

          {/* <ul>
            <li></li>
          </ul> */}

          </div>
        ))
        }
      </div>
    </div>
  );
}
