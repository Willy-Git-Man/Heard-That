import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CreateAlbumModal from "../Albums/CreateAlbumModal/CreateAlbumForm";
import CreateSongModal from "../Songs/CreateSongModal";
import ProfileButton from "../Navigation/ProfileButton";
import SearchBar from "../SearchBar/SearchBar"
import AudioPlayerGlobal from "./audioPlayer";
import AlbumNavLinks from "./albumNavlinks";
import "./navLinks.css";

export default function NavLinks({ playing, setPlaying, pic }) {
  const userInfo = useSelector((state) => state.session.user);

  return (
    <div className="navigationLinks">
      <div className="navLinkUpper">
        <NavLink className="navLinkButton" to="/Albums/1">
          <h1>Heard-That</h1>
        </NavLink>
        <SearchBar playing={playing} setPlaying={setPlaying} />
        <CreateAlbumModal userInfo={userInfo} />
        <CreateSongModal userInfo={userInfo} />
        <ProfileButton user={userInfo} />
        <NavLink className="homeNavLink" to="/">
          Edit Songs
        </NavLink>
      </div>
      <div className="navAlbumNavLinks">
        <AlbumNavLinks />
      </div>

      <AudioPlayerGlobal playing={playing} pic={pic} />
    </div>
  );
}
