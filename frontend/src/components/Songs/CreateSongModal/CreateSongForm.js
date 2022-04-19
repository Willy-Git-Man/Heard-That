import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSongThunk } from "../../../store/songs";

import "./CreateSongForm.css";

export default function CreateSongForm({ userInfo, setShowModal }) {
  const [songName, setSongName] = useState("Space Disco");
  const [artistName, setArtistName] = useState("T. Schürger");
  const [songUrl, setSongUrl] = useState(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  const [imageUrl, setImageUrl] = useState(
    "https://i.icanvas.com/DGT44?d=2&sh=v&p=1&bg=g&t=1637676126"
  );
  const [albumId, setAlumbId] = useState(1);

  const [errors, setErrors] = useState([]);

  const newSongName = (e) => setSongName(e.target.value);
  const newArtistName = (e) => setArtistName(e.target.value);
  const newSongUrl = (e) => setSongUrl(e.target.value);
  const newImageUrl = (e) => setImageUrl(e.target.value);
  const newAlbumId = (e) => setAlumbId(e.target.value);

  const history = useHistory();
  const dispatch = useDispatch();

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumObjectArray = Object.values(allAlbums);
  const allAlbumObjectArrayFiltered = allAlbumObjectArray.filter(
    (album) => album.userId === userInfo.id
  );

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
      setShowModal(false);
      history.push(`/Albums/${albumId}`);
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
{/*
          <label htmlFor="albumIdLabel"></label>
          <input
            type="text"
            name="albumId"
            value={albumId}
            onChange={newAlbumId}
            required
          /> */}
            <label htmlFor="albumIdLabel">Ablum : </label>
        <select
          type="text"
          name="albumId"
          value={albumId}
          onChange={newAlbumId}
          required
        >
          <option value={1} key={1}>
            {allAlbums[1].title}
          </option>
          <option value={2} key={2}>
            {allAlbums[2].title}
          </option>
          <option value={3} key={3}>
            {allAlbums[3].title}
          </option>
          {allAlbumObjectArrayFiltered.map((album) => (
            <option value={album.id} key={album.id}>
              {album.title}
            </option>
          ))}
        </select>

          <button className="createSongButton" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
