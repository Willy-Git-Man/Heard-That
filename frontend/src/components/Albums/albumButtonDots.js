import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAlbumThunk } from "../../store/albums";
import * as sessionActions from "../../store/session";
import { getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../Albums/UpdateAlbumModal";
import { NavLink, useParams } from "react-router-dom";

function AlbumButtonDots({ user, allAlbumsIndex }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const openMenu = () => {
    if (showMenu) {
    }
    setShowMenu(true);

    // document.getElementById("albumButtonDotsButton").style.zIndex = "-1";
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const deleteSubmit = (id) => {
    deleteAlbumDispatch(id);
    closeMenu();
    history.push("/Albums/1");
  };
  useEffect(() => {
    if (!showMenu) return;

    // const closeMenu = () => {

    //   setShowMenu(false);
    // };

    // document.addEventListener("click", closeMenu);
    // document.getElementById("test").style.zIndex = "-1";

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const deleteAlbumDispatch = (album) => {
    dispatch(deleteAlbumThunk(album));
    dispatch(getAllSongsThunk());
  };

  return (
    <>
      {!showMenu && (
        <button
          className={"albumButtonDotsButton"}
          onClick={openMenu}
          id="test"
        >
          Edit
        </button>
      )}
      {showMenu && (
        <div className="albumSettingsDiv">
          <button
            className="deleteAlbumButton"
            // onClick={() => deleteAlbumDispatch(allAlbumsIndex?.id)}
            onClick={() => deleteSubmit(+id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>

          <UpdateAlbumModal albumId={+id} closeMenu={closeMenu} />
            <button className={"songButtonDotsButton"} onClick={closeMenu}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default AlbumButtonDots;
