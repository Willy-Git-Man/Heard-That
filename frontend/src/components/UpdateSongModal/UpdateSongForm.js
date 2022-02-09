import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSongThunk } from "../../store/songs";
import "./UpdateSongForm.css";

export default function UpdateSongForm({ userInfo, setShowModal }) {
  // const [showModal, setShowModal] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const songTest = useSelector((state) => state.songs.songs[186]);

  // const {id} = useParams()

  const [id] = useState(songTest.id);

  const [songName, setSongName] = useState(songTest.songName);
  const [artistName, setArtistName] = useState(songTest.artistName);
  const [songUrl, setSongUrl] = useState(songTest.songUrl);
  const [imageUrl, setImageUrl] = useState(songTest.imageUrl);
  const [albumId, setAlumbId] = useState(songTest.albumId);

  const newSongName = (e) => setSongName(e.target.value);
  const newArtistName = (e) => setArtistName(e.target.value);
  const newSongUrl = (e) => setSongUrl(e.target.value);
  const newImageUrl = (e) => setImageUrl(e.target.value);
  const newAlbumId = (e) => setAlumbId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedSongPayload = {
      id,
      userId: sessionUser.id,
      songName,
      artistName,
      songUrl,
      imageUrl,
      albumId,
    };

    const songUpdate = await dispatch(updateSongThunk(updatedSongPayload));
    if (songUpdate) {
      // setShowModal(false)
      history.push("/api/Songs");
    }

    history.push("/Songs");
  };

  return (
    <div className="createNewSongDiv">
      <form className="createNewSongForm" onSubmit={handleSubmit}>
        <label htmlFor="songNameLabel">Song Name: </label>
        <input
          type="text"
          name="songName"
          value={songName}
          onChange={newSongName}
          required
        />

        <label htmlFor="artistNameLabel">Artist Name: </label>
        <input
          type="text"
          name="artistName"
          value={artistName}
          onChange={newArtistName}
          required
        />

        <label htmlFor="songUrlLabel">Song Url: </label>
        <input
          type="text"
          name="songUrl"
          value={songUrl}
          onChange={newSongUrl}
          required
        />

        <label htmlFor="imageUrlLabel">Image Url: </label>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={newImageUrl}
          required
        />

        <label htmlFor="albumIdLabel">Ablum Id: </label>
        <input
          type="text"
          name="albumId"
          value={albumId}
          onChange={newAlbumId}
          required
        />

        {/* <button type="submit" onClick={
          // dispatch(updateSongThunk())
          history.push('/UpdateSongForm')
        } >Update Song</button> */}
        <button>Update</button>
      </form>

      <h1>hello</h1>
    </div>
  );
}
