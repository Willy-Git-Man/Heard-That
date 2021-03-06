import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateSongThunk } from "../../../store/songs";
import "./UpdateSongForm.css";

export default function UpdateSongForm({ userInfo, setShowModal, songId, closeMenu }) {
  const id = songId;
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const songTest = useSelector((state) => state.songs.songs[id]);
  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumObjectArray = Object.values(allAlbums);
  const allAlbumObjectArrayFiltered = allAlbumObjectArray.filter(
    (album) => album.userId === sessionUser.id
  );

  const [songName, setSongName] = useState(songTest.songName);
  const [artistName, setArtistName] = useState(songTest.artistName);
  const [songUrl, setSongUrl] = useState(songTest.songUrl);
  const [imageUrl, setImageUrl] = useState(songTest.imageUrl);
  const [albumId, setAlumbId] = useState(songTest.albumId);

  const [errors, setErrors] = useState([]);

  const newSongName = (e) => setSongName(e.target.value);
  const newArtistName = (e) => setArtistName(e.target.value);
  const newSongUrl = (e) => setSongUrl(e.target.value);
  const newImageUrl = (e) => setImageUrl(e.target.value);
  const newAlbumId = (e) => setAlumbId(e.target.value);

  useEffect(() => {
    const validationErrors = [];

    if (songName.length === 0)
      validationErrors.push("Song name field is required");
    if (artistName.length === 0)
      validationErrors.push("Artist name field is required");
    if (songName.length > 50)
      validationErrors.push("Song name must be less than 50 characters");
    if (artistName.length > 50)
      validationErrors.push("Song name must be less than 50 characters");
    if (songUrl.length > 255)
      validationErrors.push("Song url must be less than 255 Characters");
    if (imageUrl.length > 255)
      validationErrors.push("Image url must be less than 255 characters");

    setErrors(validationErrors);
  }, [songName, artistName, songUrl, imageUrl, albumId]);

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
      setShowModal(false);
      closeMenu()
      // history.push("/api/Songs");
    }

    // history.push("/Songs");
  };

  return (
    <div className="createSongFormDiv">
      <form className="formDiv" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label htmlFor="songNameLabel">Song Name: </label>
        <input
          className="createSongInput"

          type="text"
          name="songName"
          value={songName}
          onChange={newSongName}
          required
        />

        <label htmlFor="artistNameLabel">Artist Name: </label>
        <input
          className="createSongInput"

          type="text"
          name="artistName"
          value={artistName}
          onChange={newArtistName}
          required
        />

        <label htmlFor="songUrlLabel">Song Url: </label>
        <input
          className="createSongInput"

          type="text"
          name="songUrl"
          value={songUrl}
          onChange={newSongUrl}
          required
        />

        <label htmlFor="imageUrlLabel">Image Url: </label>
        <input
          className="createSongInput"

          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={newImageUrl}
          required
        />

        {/* <label htmlFor="albumIdLabel">Ablum Id: </label>
        <input
          type="text"
          name="albumId"
          value={albumId}
          onChange={newAlbumId}
          required
        /> */}
        <label htmlFor="albumIdLabel">Ablum : </label>
        <select
          className="createSongInput"

          type="text"
          name="albumId"
          value={albumId}
          onChange={newAlbumId}
          required
        >
          <option value={1} key={1}>
            {allAlbums[1].title}
          </option>
          {allAlbumObjectArrayFiltered.map((album) => (
            <option value={album.id} key={album.id}>
              {album.title}
            </option>
          ))}
        </select>

        <button className="updateSongFormButton">Update</button>
      </form>
    </div>
  );
}
