import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CreateAlbumModal from '../Albums/CreateAlbumModal/CreateAlbumForm'
import CreateSongModal from '../CreateSongModal'
import ProfileButton from '../Navigation/ProfileButton'
import SearchBar from '../SearchBar/SearchBar'
import { useState, createContext, useContext } from "react";

import AudioPlayer from "react-h5-audio-player";



import './navLinks.css'

export default function AudioPlayerGlobal({playing, pic}) {
  const userInfo = useSelector((state) => state.session.user);
console.log('pic:', pic)
  return (
    <div className="globalAudioPlayer"   style={{ backgroundImage: `url(${pic})`   }}>

        <AudioPlayer
                className="audioPlayer"
                style={{ backgroundImage: `url(${pic})`   }}
                src={playing}
                onPlay={(e) => console.log("onPlay")}
              />



    </div>
  )
}
