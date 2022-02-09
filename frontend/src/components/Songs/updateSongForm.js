import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { updateSongThunk } from "../../store/songs"
import "./songs.css";

export default function UpdateSong({userInfo}) {

  const history = useHistory()
  const dispatch = useDispatch()
  const {id} = useParams()

  const sessionUser = useSelector((state) => state.session.user);
//   const songTest = useSelector((state) => state.songs.getAllSongs[3]);
const songTest = useSelector((state) => state.songs.songs[id])
console.log('songTest:', songTest)

//  console.log(' songTest:',  songTest)




  const [songName, setSongName] = useState(songTest.songName)
  const [artistName, setArtistName] = useState(songTest.artistName)
  const [songUrl, setSongUrl] = useState(songTest.songUrl)
  const [imageUrl, setImageUrl] = useState(songTest.imageUrl)
  const [albumId, setAlumbId] = useState(songTest.albumId)

  const [errors, setErrors] = useState([])

  const newSongName = (e) => setSongName(e.target.value)
  const newArtistName = (e) => setArtistName(e.target.value)
  const newSongUrl = (e) => setSongUrl(e.target.value)
  const newImageUrl = (e) =>  setImageUrl(e.target.value)
  const newAlbumId = (e) => setAlumbId(e.target.value)

  useEffect(() => {
    const validationErrors = []

    if (songName.length === 0) validationErrors.push("Song name field is required")
    if (artistName.length === 0) validationErrors.push("Artist name field is required")
    if (songName.length > 50) validationErrors.push('Song name must be less than 50 characters')
    if (artistName.length > 50) validationErrors.push('Song name must be less than 50 characters')
    if (songUrl.length > 255) validationErrors.push('Song url must be less than 255 Characters')
    if (imageUrl.length > 255) validationErrors.push('Image url must be less than 255 characters')
    if (albumId !== Number) validationErrors.push('AlbumId must be a number')


    setErrors(validationErrors)
  }, [songName, artistName, songUrl, imageUrl, albumId])


const handleSubmit = async (e) => {
  e.preventDefault()

  const newSongPayload = {
    id,
    userId: sessionUser.id,
    songName,
    artistName,
    songUrl,
    imageUrl,
    albumId,
  }

  const songUpdate = await dispatch(updateSongThunk(newSongPayload))
  if (songUpdate) {
    history.push('/api/Songs')
  }

  history.push('/Songs')
}



return (
  <div className="createNewSongDiv">
      <form className="createNewSongForm" onSubmit={handleSubmit} >

      <ul className="errors">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>

        <label htmlFor="songNameLabel">Song Name: </label>
        <input type="text" name="songName" value={songName} onChange={newSongName} required />

        <label htmlFor="artistNameLabel">Artist Name: </label>
        <input type="text" name="artistName" value={artistName} onChange={newArtistName} required />

        <label htmlFor="songUrlLabel">Song Url: </label>
        <input type="text" name="songUrl" value={songUrl} onChange={newSongUrl} required />

        <label htmlFor="imageUrlLabel">Image Url: </label>
        <input type="text" name="imageUrl" value={imageUrl} onChange={newImageUrl} required />

        <label htmlFor="albumIdLabel">Ablum Id: </label>
        <input type="text" name="albumId" value={albumId} onChange={newAlbumId} required />

        {/* <button type="submit" onClick={
          // dispatch(updateSongThunk())
          history.push('/UpdateSongForm')
        } >Update Song</button> */}
        <button >Update</button>
      </form>

      <h1>hello</h1>
    </div>
)
}
