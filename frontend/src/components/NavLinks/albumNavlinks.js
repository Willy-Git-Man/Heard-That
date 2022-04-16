import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



import "./navLinks.css";

export default function AlbumNavLinks() {
  const userInfo = useSelector((state) => state.session.user);
  const allAlbums = Object.values(useSelector((state) => state.albums.albums));


  return (
    <div className="navigationLink">
      {allAlbums.map((album) => (

      <NavLink className="navAlbumNavLink" to={`/Albums/${album.id}`}>
        {album.title}
      </NavLink>
      ))}


    </div>
  );
}
