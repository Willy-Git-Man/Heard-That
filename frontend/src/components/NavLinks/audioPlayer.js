import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CreateAlbumModal from '../CreateAlbumModal/CreateAlbumForm'
import CreateSongModal from '../CreateSongModal'
import ProfileButton from '../Navigation/ProfileButton'
import SearchBar from '../SearchBar/SearchBar'
import { useState, createContext, useContext } from "react";

import AudioPlayer from "react-h5-audio-player";



import './navLinks.css'

export default function AudioPlayerGlobal() {
  const userInfo = useSelector((state) => state.session.user);

  return (
    <div className="globalAudioPlayer">

        <AudioPlayer
                className="audioPlayer"
                // autoPlay
                src={null}
                onPlay={(e) => console.log("onPlay")}
              />



    </div>
  )
}
