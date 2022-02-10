
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllAlbumsThunk } from '../../store/albums'
import './albums.css'

export default function MyAlbums({userInfo}) {
  const history = useHistory()
  const dispatch = useDispatch()

  const allAlbums = useSelector((state) => state.albums)

  console.log('allAlbums:', allAlbums)

  if (userInfo === undefined) {
    history.push('/')
  }


  useEffect(() => {
    dispatch(getAllAlbumsThunk())
  }, [dispatch])

  return (
    <h1 className="test">Hello Album</h1>
  )
}
