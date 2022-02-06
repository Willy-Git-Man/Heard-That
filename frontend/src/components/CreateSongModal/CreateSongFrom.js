import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addSongThunk } from "../../store/songs"


export default function CreateSongForm() {
const history = useHistory()
const dispatch = useDispatch()

const handleSubmit = async (e) => {
  e.preventDefault()

  const newSongPayload = {
    userId: 1,
    albumId: 1,
    songName: 'hardCodeSong',
    artistName: 'harderCodedArtist',
    songUrl: 'www.hardestCode.com',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/61d068989802259093ce8cd2/Tom-Ford-AW20-Show---Arrivals/960x0.jpg?fit=bounds&format=jpg&width=960'
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
