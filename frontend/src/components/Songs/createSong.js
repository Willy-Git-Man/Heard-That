import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addSongThunk } from "../../store/songs"


export default function CreateSong() {
const history = useHistory()
const dispatch = useDispatch()

const handleSubmit = async (e) => {
  e.preventDefault()

  const newSongPayload = {
    userId: 1,
    albumId: 1,
    songName: 'hardCodeSong',
    artistName: 'harderCodedArtist',
    songUrl: 'www.hardestCode.com'
  }
  dispatch(addSongThunk(newSongPayload))
  history.push('/Songs')
}
  return (
    <>
    <div className="createNewSongDiv">
      <form className="createNewSongForm" onSubmit={handleSubmit} >

        <button>Create Song</button>
      </form>
    </div>
    </>
  )
}
