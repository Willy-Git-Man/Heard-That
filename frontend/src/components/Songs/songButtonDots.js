import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useParams } from "react-router-dom";
import { deleteSongThunk} from "../../store/songs";
import UpdateSongModal from "./UpdateSongModal";
import { FaEdit, FaRegWindowClose } from "react-icons/fa";

function SongButtonDots({ user, allAlbumsIndex, songId }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const openMenu = () => {
    if (showMenu) setShowMenu(false);
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };


  const deleteSubmit = (id) => {
    dispatch(deleteSongThunk(id));
    closeMenu();
  };

  useEffect(() => {
    if (!showMenu) return;

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
    {!showMenu && (

      <button className={"songButtonDotsButton"} onClick={openMenu}><FaEdit />
      </button>
        )}
      {showMenu && (
        <div className="songSettingsDiv">
          <button
            className="deleteSongButton"
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
          <button className={"songEditCloseButton"} onClick={closeMenu}>
            <FaRegWindowClose />
          </button>
        </div>
      )}
    </>
  );
}

export default SongButtonDots;
