import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteSongThunk } from "../../store/songs"

export default function DeleteSong() {
  const dispatch = useDispatch()

  const dispatchSongRemoval = (songId) => {
    dispatch(deleteSongThunk(songId))
  }

  const {id} = useParams()

  return (
    <>
    <button className="deleteSongButton" onClick={() => dispatchSongRemoval(50)}>
      Delete Song
    </button>
    </>
  )
}
