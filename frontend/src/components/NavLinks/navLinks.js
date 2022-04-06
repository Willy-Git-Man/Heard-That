import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CreateAlbumModal from '../CreateAlbumModal/CreateAlbumForm'
import CreateSongModal from '../CreateSongModal'
import ProfileButton from '../Navigation/ProfileButton'
import './navLinks.css'

export default function NavLinks() {
  const userInfo = useSelector((state) => state.session.user);

  return (
    <nav className="navigationLinks">

    {/* <button className="navRouteButton">

<NavLink className="navLinkButton" to="/">Home</NavLink>
        </button> */}

        <CreateSongModal userInfo={userInfo}/>
        <CreateAlbumModal userInfo={userInfo}/>
        <ProfileButton user={userInfo} />

        {/* <i className="fa fa-music"></i> */}



    </nav>
  )
}
