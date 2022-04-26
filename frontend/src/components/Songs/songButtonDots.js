import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAlbumThunk } from "../../store/albums";
import * as sessionActions from "../../store/session";
import { deleteSongThunk, getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../Albums/UpdateAlbumModal";
import { NavLink, useParams } from "react-router-dom";
import UpdateSongModal from "./UpdateSongModal";

function SongButtonDots({ user, allAlbumsIndex, songId }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  console.log("ggggg", +id);

  const openMenu = () => {
    if (showMenu) setShowMenu(false);
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const deleteSongDispatch = (album) => {
    dispatch(deleteSongThunk(album));
    dispatch(getAllSongsThunk());
  };
  const deleteSubmit = (id) => {
    dispatch(deleteSongThunk(id));

    closeMenu();
  };

  useEffect(() => {
    if (!showMenu) return;

    // const closeMenu = () => {

    //   setShowMenu(false);
    // };

    // document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
    {!showMenu && (

      <button className={"songButtonDotsButton"} onClick={openMenu}>
        Edit
      </button>
        )}
      {showMenu && (
        <div className="songSettingsDiv">
          <button className={"songButtonDotsButton"} onClick={closeMenu}>
            Close
          </button>
          <button
            className="deleteAlbumButton"
            // onClick={() => deleteAlbumDispatch(allAlbumsIndex?.id)}
            onClick={() => deleteSubmit(songId)}
          >
            <i className="far fa-trash-alt"></i>
          </button>

          <UpdateSongModal
            albumId={+id}
            closeMenu={closeMenu}
            songId={songId}
          />
        </div>
      )}
    </>
  );
}

export default SongButtonDots;
