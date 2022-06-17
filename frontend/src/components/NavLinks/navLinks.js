import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CreateAlbumModal from "../Albums/CreateAlbumModal/CreateAlbumForm";
import CreateSongModal from "../Songs/CreateSongModal";
import ProfileButton from "./ProfileButton";
import SearchBar from "../SearchBar/SearchBar";

import "./navLinks.css";
import AudioPlayerGlobal from "./audioPlayer";
import AlbumNavLinks from "./albumNavlinks";
import { FaGithub, FaLinkedinIn, FaHome, FaPlus } from "react-icons/fa";
export default function NavLinks({ playing, setPlaying, pic }) {
  const userInfo = useSelector((state) => state.session.user);
  const allAlbums = Object.values(useSelector((state) => state.albums.albums));

  return (
    <>

      <div className="navLinkUpper">

        <NavLink
          className="logoTopLeft"
          activeClassName="logoTopLeft"
          to="/Albums/1"
        >
          <h1 className="logoH1">Heard-That</h1>
        </NavLink>
        <NavLink
          className="createAlbumModalButton"
          activeClassName="homeNav"
          to="/Albums/1"
        >
          <FaHome />
          Home
        </NavLink>
        <CreateAlbumModal userInfo={userInfo} />

        <FaPlus />
        <CreateSongModal userInfo={userInfo} />

        <ProfileButton user={userInfo} />
        <span className="navUpperBottomLine"></span>

      </div>

      <div className="sideBarLower">

        <AlbumNavLinks allAlbums={allAlbums} />
        <SearchBar playing={playing} setPlaying={setPlaying} />

        <div className="socialLinks">
          <div className="gitLinkedInDivs">
            <a href="https://github.com/Willy-Git-Man/Heard-That" target="blank"><h2><FaGithub /></h2></a>

            <a href="https://www.linkedin.com/in/william-b-grossman/" target="blank"><h2><FaLinkedinIn /></h2></a>
          </div>
        </div>

      </div>
    </>
  );
}
