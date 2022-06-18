import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSongThunk } from "../../../store/songs";
import { FaRegPlusSquare } from "react-icons/fa";


import "./CreateSongForm.css";

export default function CreateSongForm({ userInfo, setShowModal }) {
  const dispatch = useDispatch();


  const [songName, setSongName] = useState("Song Name");
  const [artistName, setArtistName] = useState("T. Schürger");
  const [songUrl, setSongUrl] = useState("");
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

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumObjectArray = Object.values(allAlbums);
  const allAlbumObjectArrayFiltered = allAlbumObjectArray.filter(
    (album) => album.userId === userInfo.id
  );


  const allSongs = useSelector((state) => state.songs.songs);
  const allSongsObjectArray = Object.values(allSongs);
  const allSongsObjectArrayFiltered = allSongsObjectArray.filter((album) => album?.userId === userInfo?.id);
  console.log('here', allSongsObjectArrayFiltered, userInfo)


  useEffect(() => {
    const validationErrors = [];

    if (songName.length === 0) validationErrors.push("Song name field is required");
    if (artistName.length === 0) validationErrors.push("Artist name field is required");
    if (songName.length > 50) validationErrors.push("Song name must be less than 50 characters");
    if (artistName.length > 50) validationErrors.push("Song name must be less than 50 characters");
    if (songUrl.length > 255) validationErrors.push("Song url must be less than 255 Characters");
    if (imageUrl.length > 255) validationErrors.push("Image url must be less than 255 characters");

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
      <div className="createSongFormDiv">

        <h3 className='createSongTitle'>Add Song</h3>
        <form className="formDiv" onSubmit={handleSubmit}>
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <input
            className="createSongInput"
            type="text"
            name="songName"
            placeholder="Song Name"
            onChange={newSongName}
            required
          />

          <input
            className="createSongInput"
            type="text"
            name="artistName"
            // value={"Artist Name"}
            placeholder="Artist Name"

            onChange={newArtistName}
            required
          />

          {/* <label htmlFor="songUrlLabel">Song Url: </label>
          <input
            className="createSongInput"
            type="text"
            name="songUrl"
            value={songUrl}
            onChange={newSongUrl}
            required
          /> */}

          <select
            type="text"
            name="albumId"
            className="createSongInput"
            onChange={newSongUrl}
            required
          >
            <option value="Archived Songs">
              {"Archived Songs"}
            </option>

            {allSongsObjectArrayFiltered.map((song, i) => (
              <option value={song.songUrl} key={i} >
                {song.songName}
              </option>
            ))}
          </select>

          <select
            type="text"
            name="albumId"
            className="createSongInput"
            // value={albumId}
            onChange={newAlbumId}
            required
          >

            <option value="Archived Songs">
              {"Archived Albums"}
            </option>

            <option value={1} key={1}>
              {allAlbums[1].title}
            </option>
            <option value={2} key={2}>
              {allAlbums[2].title}
            </option>
            <option value={3} key={3}>
              {allAlbums[3].title}
            </option>
            <option value={4} key={4}>
              {allAlbums[4].title}
            </option>   <option value={5} key={5}>
              {allAlbums[5].title}
            </option>   <option value={6} key={6}>
              {allAlbums[6].title}
            </option>  <option value={7} key={7}>
              {allAlbums[7].title}
            </option> <option value={8} key={8}>
              {allAlbums[8].title}
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
