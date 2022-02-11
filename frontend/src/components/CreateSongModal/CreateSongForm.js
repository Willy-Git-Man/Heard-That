import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSongThunk } from "../../store/songs";

import "./CreateSongForm.css";

export default function CreateSongForm({ userInfo, setShowModal }) {
  const [songName, setSongName] = useState("The Real Slim Shady");
  const [artistName, setArtistName] = useState("Eminem");
  const [songUrl, setSongUrl] = useState(
    "https://www.mboxdrive.com/Eminem_-_The_Real_Slim_Shady_47829433.mp3"
  );
  const [imageUrl, setImageUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/en/6/69/Eminem_-_The_Real_Slim_Shady_CD_cover.jpg"
  );
  const [albumId, setAlumbId] = useState(1);

  const [errors, setErrors] = useState([])

  const newSongName = (e) => setSongName(e.target.value);
  const newArtistName = (e) => setArtistName(e.target.value);
  const newSongUrl = (e) => setSongUrl(e.target.value);
  const newImageUrl = (e) => setImageUrl(e.target.value);
  const newAlbumId = (e) => setAlumbId(e.target.value);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const validationErrors = []

    if (songName.length === 0) validationErrors.push("Song name field is required")
    if (artistName.length === 0) validationErrors.push("Artist name field is required")
    if (songName.length > 50) validationErrors.push('Song name must be less than 50 characters')
    if (artistName.length > 50) validationErrors.push('Song name must be less than 50 characters')
    if (songUrl.length > 255) validationErrors.push('Song url must be less than 255 Characters')
    if (imageUrl.length > 255) validationErrors.push('Image url must be less than 255 characters')
    // if (albumId !== Number) validationErrors.push('AlbumId must be a number')


    setErrors(validationErrors)
  }, [songName, artistName, songUrl, imageUrl, albumId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSongPayload = {
      songName,
      artistName,
      songUrl,
      imageUrl,
      albumId,
      userId: userInfo.id,
    };

    const newSong = await dispatch(addSongThunk(newSongPayload));
    if (newSong) {
      setShowModal(false)
      history.push("/Songs");
      //I have to push to AllSongs as it wont exit modal for some reason if I route to /songs asdf
    }
  };
  return (
    <>
      <div className="createNewSongDiv">
        <form className="createNewSongForm" onSubmit={handleSubmit}>

        <ul className="errors">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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

          <label htmlFor="albumIdLabel"></label>
          <input

            type="hidden"
            name="albumId"
            value={albumId}
            onChange={newAlbumId}
            required
          />

          <button type="submit">Create Song</button>
        </form>
      </div>
    </>
  );
}
