import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./navLinks.css";

export default function AlbumNavLinks() {
  const userInfo = useSelector((state) => state.session.user);
  const allAlbums = Object.values(useSelector((state) => state.albums.albums));

  return (
    <div className="navigationLink">
      <div className="navigationLink">
        <NavLink className="navAlbumNavLink" to={`/Albums/${1}`}>
          {allAlbums[0].title}
        </NavLink>
        <NavLink className="navAlbumNavLink" to={`/Albums/${2}`}>
          {allAlbums[1].title}
        </NavLink>
        <NavLink className="navAlbumNavLink" to={`/Albums/${3}`}>
          {allAlbums[2].title}
        </NavLink>

        {allAlbums
          .filter((el) => el.userId === userInfo.id)
          .map((album) => (

                <NavLink  key={album.id} className="navAlbumNavLink" activeClassName="active" to={`/Albums/${album.id}`}>
              {album.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
}
