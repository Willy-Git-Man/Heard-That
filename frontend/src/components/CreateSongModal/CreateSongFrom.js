import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addSongThunk } from "../../store/songs"


export default function CreateSongForm() {

  const [songName, setSongName] = useState("Fake Song")
  const [artistName, setArtistName] = useState("Fake Artist")
  const [songUrl, setSongUrl] = useState("Fake song url")
  const [imageUrl, setImageUrl] = useState("https://upload.wikimedia.org/wikipedia/en/1/1c/LightningBoltSkull.gif")
  const [albumId, setAlumbId] = useState(1)

  const newSongName = (e) => setSongName(e.target.value)
  const newArtistName = (e) => setArtistName(e.target.value)
  const newSongUrl = (e) => setSongUrl(e.target.value)
  const newImageUrl = (e) =>  setImageUrl(e.target.value)
  const newAlbumId = (e) => setAlumbId(e.target.value)


const history = useHistory()
const dispatch = useDispatch()

const handleSubmit = async (e) => {
  e.preventDefault()

  const newSongPayload = {
    songName,
    artistName,
    songUrl,
    imageUrl,
    albumId,
    userId: 1
  }
  dispatch(addSongThunk(newSongPayload))
  history.push('/Songs')

}
  return (
    <>
    <div className="createNewSongDiv">
      <form className="createNewSongForm" onSubmit={handleSubmit} >

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

        <button>Create Song</button>
      </form>
    </div>
    </>
  )
}
