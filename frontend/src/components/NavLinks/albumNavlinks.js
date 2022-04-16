import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navLinks.css";

export default function AlbumNavLinks() {
  const allAlbums = Object.values(useSelector((state) => state.albums.albums));

  return (
    <div className="navigationLink">
      {allAlbums.map((album) => (
        <NavLink key={album.id} className="navAlbumNavLink" to={`/Albums/${album.id}`}>
          {album.title}
        </NavLink>
      ))}
    </div>
  );
}
