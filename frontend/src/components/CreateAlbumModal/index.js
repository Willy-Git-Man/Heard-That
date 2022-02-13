import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAlbumThunk } from "../../store/albums";

import "./CreateAlbumForm.css";

export default function CreateAlbumForm({ userInfo, setShowModal }) {
  const [title, setTitle] = useState("Summer Vibes");
  const [imageUrl, setImageUrl] = useState("https://i1.sndcdn.com/artworks-kpswMSYYQ4osELsK-jbOC2w-t500x500.jpg");
  const [errors, setErrors] = useState([])

  const newTitle = (e) => setTitle(e.target.value);
  const newAlbumImage = (e) => setImageUrl(e.target.value);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const validationErrors = []

    if (title.length === 0) validationErrors.push("Song name field is required")
    if (title.length > 50) validationErrors.push('Song name must be less than 50 characters')
    if (imageUrl.length === 0) validationErrors.push("Artist name field is required")
    if (imageUrl.length > 255) validationErrors.push('Image url must be less than 255 characters')


    setErrors(validationErrors)
  }, [title, imageUrl])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAlbumPayload = {
      title,
      imageUrl,
      userId: userInfo.id,
    };

    const newSong = await dispatch(addAlbumThunk(newAlbumPayload));
    if (newSong) {
      setShowModal(false)
      history.push("/Albums");
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
          <label htmlFor="albumTitle">Album Name: </label>
          <input
            type="text"
            name="albumTitle"
            value={title}
            onChange={newTitle}
            required
          />

          <label htmlFor="albumImage">Image Url: </label>
          <input
            type="text"
            name="albumImage"
            value={imageUrl}
            onChange={newAlbumImage}
            required
          />


          <button type="submit">Create Album</button>
        </form>
      </div>
    </>
  );
}
