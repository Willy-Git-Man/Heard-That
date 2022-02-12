import { NavLink } from 'react-router-dom'
import CreateSongModal from '../CreateSongModal'
import './navLinks.css'

export default function NavLinks() {
  return (
    <nav className="navigationLinks">

    <NavLink activeClassName="currentNavRoute" className="navRoute" to='/Songs'>My Songs</NavLink>
    ------
    <NavLink activeClassName="currentNavRoute" className="navRoute" to='/Albums'>My Albums</NavLink>
    {/* ------ */}
    {/* <NavLink exact to="/">Home</NavLink> */}

    {/* <CreateSongModal/> */}


    </nav>
  )
}
