import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getAllAlbumSongsThunk } from "../../store/albums";
import "./albums.css";

export default function AlbumSongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumKeys = Object.keys(allAlbums)

  const allSongs = useSelector((state) => state.songs.songs);

  console.log('allAlbums:', allAlbums[1].title)

  const {id} = useParams()


  if (userInfo === undefined) {
    history.push("/");
  }

  // useEffect(() => {
  //   dispatch(getAllAlbumSongsThunk());
  // }, [dispatch]);

  return (
    <div className="albumsMainDiv" >
      <h1 className="test">Enjoy listening to {allAlbums[id].title}</h1>
      <div className="albumSecondDiv">
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
