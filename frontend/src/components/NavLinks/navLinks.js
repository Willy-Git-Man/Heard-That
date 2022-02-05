import { NavLink } from 'react-router-dom'
import './navLinks.css'

export default function NavLinks() {

  return (
    <NavLink activeClassName="currentNavRoute" to='/Songs'>Songs</NavLink>
  )
}
