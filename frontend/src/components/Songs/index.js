import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongsThunk } from "../../store/songs";
import CreateSong from "./createSong";
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
      <SongFormNavLink />

      {allSongs?.map((song) => (
        <div className="allSongsDivTest" key={song.id}>
            <ul>
              <li>{song.songName} --- by the legendary --- {song.artistName}</li>
            </ul>

        </div>
      ))}
    </div>
  );
}
