import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CreateAlbumModal from "../CreateAlbumModal/CreateAlbumForm";
import CreateSongModal from "../CreateSongModal";
import ProfileButton from "../Navigation/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import { useState, createContext, useContext } from "react";

import AudioPlayer from "react-h5-audio-player";

import "./navLinks.css";
import AudioPlayerGlobal from "./audioPlayer";

export default function NavLinks() {
  const userInfo = useSelector((state) => state.session.user);

  return (
    <nav className="navigationLinks">
      <NavLink className="navLinkButton" to="/">
        <h1>Heard-That</h1>
      </NavLink>
      <SearchBar />
      <CreateAlbumModal userInfo={userInfo} />
      <CreateSongModal userInfo={userInfo} />
      <ProfileButton user={userInfo} />

      <AudioPlayerGlobal />
    </nav>
  );
}
