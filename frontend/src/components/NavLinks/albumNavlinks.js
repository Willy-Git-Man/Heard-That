import { useSelector } from "react-redux";

import { NavLink, useParams } from "react-router-dom";
import AlbumButtonDots from "../Albums/albumButtonDots";

import "./navLinks.css";

export default function AlbumNavLinks({ allAlbums }) {
  const userInfo = useSelector((state) => state.session.user);
  const { id } = useParams();


  const mainAlbumKeys = Object.keys(allAlbums)
  const mainAlbums = mainAlbumKeys.splice(0,8)

  return (
    <div className="navigationLink">
      <div className="navigationLinkInner">
        {mainAlbums.map((album) => (

          <NavLink className="navAlbumNavLink" to={`/Albums/${+album + 1}`} key={album}>
           {allAlbums[album]?.title}
         </NavLink>
             )
        )}

        {allAlbums
          .filter((el) => el.userId === userInfo.id)
          .map((album) => (
            <div className="albumNavLinkAndEdit" key={album.id}>
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
