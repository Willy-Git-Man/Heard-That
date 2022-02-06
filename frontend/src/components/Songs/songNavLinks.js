import { NavLink } from 'react-router-dom'
import './songs.css'

export default function SongFormNavLink() {

  return (
    <NavLink activeClassName="currentNavRoute" to='/CreateSongForm'>Add Song</NavLink>
  )
}
