import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteSongThunk } from "../../store/songs"

export default function DeleteSong() {
  const dispatch = useDispatch()

  const dispatchSongRemoval = (song) => {
    dispatch(deleteSongThunk(song))
  }

  const id = useParams()

  console.log('id:', id)
  return (
    <>
    <button classNAme="deleteSongButton" onClick={() => dispatchSongRemoval(70)}>
      Delete Song
    </button>
    </>
  )
}
