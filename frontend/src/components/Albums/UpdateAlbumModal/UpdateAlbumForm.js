import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAlbumThunk } from "../../../store/albums";
import "./UpdateAlbumForm.css";

export default function UpdateAlbumForm({
  setShowModal,
  albumId,
  closeMenu,
}) {
  const id = albumId;

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const currentAlbum = useSelector((state) => state.albums.albums[id]);

  const [title, setTitle] = useState(currentAlbum.title);
  const [imageUrl, setImageUrl] = useState(currentAlbum.imageUrl);

  const [errors, setErrors] = useState([]);

  const newTitle = (e) => setTitle(e.target.value);
  const newImageUrl = (e) => setImageUrl(e.target.value);

  useEffect(() => {
    const validationErrors = [];

    if (title.length === 0)
      validationErrors.push("Song name field is required");
    if (title.length > 50)
      validationErrors.push("Song name must be less than 50 characters");
    if (imageUrl.length === 0)
      validationErrors.push("Artist name field is required");
    if (imageUrl.length > 255)
      validationErrors.push("Song url must be less than 255 Characters");
    if (imageUrl.length > 255)
      validationErrors.push("Image url must be less than 255 characters");

    setErrors(validationErrors);
  }, [title, imageUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedAlbumPayload = {
      id,
      userId: sessionUser.id,
      title,
      imageUrl,
    };

    const albumUpdate = await dispatch(updateAlbumThunk(updatedAlbumPayload));
    if (albumUpdate) {
      setShowModal(false);
      // closeMenu(true)
      // history.push("/api/Albums");
    }
    closeMenu();
    // history.push(`/Albums/${id}`);
  };

  return (
    <div className="updateAlbumFormDiv">
      <h3 className='createSongTitle'>Update Album</h3>

      <form className="formDiv" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label htmlFor="songNameLabel">Album Title: </label>
        <input
          className="createSongInput"

          type="text"
          name="songName"
          value={title}
          onChange={newTitle}
          required
        />

        <label htmlFor="artistNameLabel">Image Url: </label>
        <input
          className="createSongInput"

          type="text"
          name="artistName"
          value={imageUrl}
          onChange={newImageUrl}
          required
        />

        <button className="createSongButton" type="submit">Update</button>
      </form>
    </div>
  );
}
