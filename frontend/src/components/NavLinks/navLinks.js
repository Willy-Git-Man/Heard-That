import { NavLink } from 'react-router-dom'
import './navLinks.css'

export default function NavLinks() {
  return (
    <nav className="navigationLinks">

    <NavLink activeClassName="currentNavRoute" className="navRoute" to='/Songs'>My Songs</NavLink>

    <NavLink activeClassName="currentNavRoute" className="navRoute" exact to='/Albums'>My Albums</NavLink>

    </nav>
  )
}
