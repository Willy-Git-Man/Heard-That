import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAlbumThunk } from "../../../store/albums";
import "./CreateAlbumForm.css";

export default function CreateAlbumForm({ userInfo, setShowModal }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("Summer Vibes");
  const [imageUrl, setImageUrl] = useState(
    "https://i1.sndcdn.com/artworks-kpswMSYYQ4osELsK-jbOC2w-t500x500.jpg"
  );
  const [image, setImage] = useState("")
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [errors, setErrors] = useState([]);
  // const newTitle = (e) => setTitle(e.target.value);

  const submit = async event => {
    event.preventDefault()
    const newAlbumPayload = { imageUrl: file.name, title: description, userId: userInfo.id }

    const results = await dispatch(addAlbumThunk(newAlbumPayload))

    if (results){
      setImageUrl([results.image, ...images])
      setShowModal(false)
  }else{
      const data = await results.json()
      setErrors([data.errors])
  }
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }

  useEffect(() => {
    const validationErrors = [];

    if (title.length === 0)
      validationErrors.push("Song name field is required");
    if (title.length > 50)
      validationErrors.push("Song name must be less than 50 characters");
    if (imageUrl.length === 0)
      validationErrors.push("Artist name field is required");
    if (imageUrl.length > 255)
      validationErrors.push("Image url must be less than 255 characters");

    setErrors(validationErrors);
  }, [title, imageUrl]);

  return (

    <>
      <div className="createAlbumFormDiv">
        <h3 className='createSongTitle'>
          Add Playlist</h3>

        <form className="formDivAlbum" onSubmit={submit}>
          <ul className="errors">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
          <input onChange={fileSelected} type="file" accept="image/*" name="inputFile"></input>
          <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Playlist Title"></input>

          <button className="createSongButton" type="submit">
            Create
          </button>
        </form>
      </div>
    </>

  );

}
