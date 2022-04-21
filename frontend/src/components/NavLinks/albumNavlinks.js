import { useSelector } from "react-redux";

import { NavLink, useParams } from "react-router-dom";
import AlbumButtonDots from "../Albums/albumButtonDots";

import "./navLinks.css";

export default function AlbumNavLinks({ allAlbums }) {
  const userInfo = useSelector((state) => state.session.user);
  const { id } = useParams();

  return (
    <div className="navigationLink">
      <div className="navigationLink">
        <NavLink className="navAlbumNavLink" to={`/Albums/${1}`}>
          {allAlbums[0]?.title}
        </NavLink>
        <NavLink className="navAlbumNavLink" to={`/Albums/${2}`}>
          {allAlbums[1]?.title}
        </NavLink>
        <NavLink className="navAlbumNavLink" to={`/Albums/${3}`}>
          {allAlbums[2]?.title}
        </NavLink>

        {allAlbums
          .filter((el) => el.userId === userInfo.id)
          .map((album) => (
            <div className="albumNavLinkAndEdit">
              <NavLink
                key={album.id}
                className="navAlbumNavLink"
                activeClassName="active"
                to={`/Albums/${album.id}`}
              >
                {album?.title}
              </NavLink>
              {album.id === +id && (
                <AlbumButtonDots allAlbumsIndex={allAlbums[album]} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
