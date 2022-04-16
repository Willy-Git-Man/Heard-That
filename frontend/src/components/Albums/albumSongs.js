import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllAlbumsThunk } from "../../store/albums";
import { getAllSongsThunk} from "../../store/songs";
import "./albums.css";

import "react-h5-audio-player/lib/styles.css";
import NavLinks from "../NavLinks/navLinks";
import AlbumCarousel from "./albumCarousel";

export default function AlbumSongs({ userInfo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [playing, setPlaying] = useState("");
  const [pic, setPic] = useState("");

  const allAlbums = useSelector((state) => state.albums.albums);
  const allSongs = useSelector((state) => state.songs.songs);
  const allSongsObjectKeys = Object.keys(allSongs);

  const test = (playing, pic) => {
    setPlaying(playing);
    setPic(pic);
  };

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSongsThunk());
  }, [dispatch]);

  if (userInfo === undefined) {
    history.push("/");
  }

  if (!allSongsObjectKeys.length) {
    return null;
  }

  return (
    <div className="">
      <NavLinks playing={playing} setPlaying={setPlaying} pic={pic} />
      {/* <AlbumCarousel userInfo={userInfo} /> */}

      <div className="albumSongsSecondDiv">
        <div className="albumSongsListDiv">
          {allSongsObjectKeys
            ?.filter(
              (key) =>
                allSongs[key]?.userId === userInfo.id &&
                allSongs[key]?.albumId === allAlbums[id].id
            )
            .map((key) => (
              <div
                className="albumSongListDiv"
                key={allSongs[key].id}
                // onClick={console.log("success")}
              >
                <div
                  className="songUl"
                  style={{ backgroundImage: `url(${allSongs[key].imageUrl})` }}
                  alt="Broken Img Url"
                  onClick={() => setPlaying(allSongs[key].songUrl)}
                >
                  <li className="songListItem">{allSongs[key].songName}</li>

                  <li className="songListItem">{allSongs[key].artistName}</li>
                  <button
                    className="songDivButton"
                    style={{
                      backgroundImage: `url(${allSongs[key].imageUrl})`,
                    }}
                    onClick={() =>
                      test(allSongs[key].songUrl, allSongs[key].imageUrl)
                    }
                  ></button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
