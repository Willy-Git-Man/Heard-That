import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CreateAlbumModal from '../CreateAlbumModal/CreateAlbumForm'
import CreateSongModal from '../CreateSongModal'
import ProfileButton from '../Navigation/ProfileButton'
import SearchBar from '../SearchBar/SearchBar'
import './navLinks.css'

export default function NavLinks() {
  const userInfo = useSelector((state) => state.session.user);

  return (
    <nav className="navigationLinks">

    {/* <button className="navRouteButton">

<NavLink className="navLinkButton" to="/">Home</NavLink>
        </button> */}
   <NavLink className="navLinkButton" to="/">
                  <h1>Heard-That</h1>
                </NavLink>
        <SearchBar />
        <CreateAlbumModal userInfo={userInfo}/>
        <CreateSongModal userInfo={userInfo}/>
        <ProfileButton user={userInfo} />

        {/* <i className="fa fa-music"></i> */}



    </nav>
  )
}
