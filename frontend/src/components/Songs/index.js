import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongsThunk } from "../../store/songs";
import CreateSongModal from "../CreateSongModal";
import SongFormNavLink from "./songNavLinks";

export default function Songs() {
  // const currentUser = useSelector(state => state.session.user)
  // console.log('curent user:', currentUser)


  const allSongs = useSelector((state) => state.songs.getAllSongs);
  console.log("All Current Songs:", allSongs);

  const el = 'will'
  const allSongsObject = {el, ...allSongs}

  console.log('allSongsObject:', allSongsObject[0])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  return (
    <div className="songsMainDiv">
      <h1>Songs Div</h1>
      {/* <SongFormNavLink /> */}
      <CreateSongModal />

      {allSongs?.map((song) => (
        <div className="songListDiv" key={song.id}>
              <img className="songImage" src={song.imageUrl} alt="Sorry No go on the load yo"/>
            <ul className="songUl">
              <li className="songListItem" > <i className="fab fa-grav"></i>{song.songName}</li>


              <li className="songListItem" > <i className="fab fa-grav"></i>{song.artistName}</li>

              <li className="songListItem" > <i className="fab fa-grav"></i>{song.songUrl}</li>


            </ul>

        </div>
      ))}
    </div>
  );
}
