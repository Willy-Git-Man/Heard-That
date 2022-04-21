import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAlbumThunk } from "../../store/albums";
import * as sessionActions from "../../store/session";
import { deleteSongThunk, getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../Albums/UpdateAlbumModal";
import { NavLink, useParams } from "react-router-dom";
import UpdateSongModal from "./UpdateSongModal";


function SongButtonDots({ user, allAlbumsIndex }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams()
  console.log('ggggg', +id)

  const openMenu = () => {
    if (showMenu) return;
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
    deleteSongDispatch(id)
    closeMenu()
    history.push(`/Albums/${+id}`)
  }

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
      <button className={"songButtonDotsButton"} onClick={openMenu}>
        Edit
      </button>
        {showMenu && (
          <div className="albumSettingsDiv">
            <button
              className="deleteAlbumButton"
              // onClick={() => deleteAlbumDispatch(allAlbumsIndex?.id)}
              onClick={() => deleteSubmit(+id)}

            >
              <i className="far fa-trash-alt"></i>
            </button>

            <UpdateSongModal
              albumId={+id}
              closeMenu={closeMenu}
            />
          </div>
        )}
    </>
  );
}

export default SongButtonDots;
