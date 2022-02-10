import { NavLink } from 'react-router-dom'
import CreateSongModal from '../CreateSongModal'
import './navLinks.css'

export default function NavLinks() {
  return (
    <nav className="navigationLinks">

    <NavLink activeClassName="currentNavRoute" to='/Songs'>My Songs</NavLink>
    ------
    <NavLink activeClassName="currentNavRoute" to='/AllSongs'>All Songs</NavLink>
    {/* ------ */}
    {/* <NavLink exact to="/">Home</NavLink> */}

    {/* <CreateSongModal/> */}


    </nav>
  )
}
