import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addSongThunk } from "../../store/songs"


export default function CreateSongForm({userInfo}) {

  const [songName, setSongName] = useState("Fake Song")
  const [artistName, setArtistName] = useState("Fake Artist")
  const [songUrl, setSongUrl] = useState("https://soundcloud.com/rubywatersmusic/quantum-physics-ruby-waters")
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
    userId: userInfo.id
  }


//  const test = await dispatch(addSongThunk(newSongPayload))
//  if (test)
//     history.push('/Songs')

const newSong = dispatch(addSongThunk(newSongPayload))
if (newSong){
  history.push('/Songs')
//I have to push to AllSongs as it wont exit modal for some reason if I route to /songs
}



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

        <button type="submit" >Create Song</button>
      </form>
    </div>
    </>
  )
}
