import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAlbumThunk } from "../../store/albums";
import * as sessionActions from "../../store/session";
import { getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../Albums/UpdateAlbumModal";

function AlbumButtonDots({ user, allAlbumsIndex }) {
  const [showMenu, setShowMenu] = useState(false);
  console.log("allAlbumsIndex:", allAlbumsIndex);
  const dispatch = useDispatch();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;

    // const closeMenu = () => {

    //   setShowMenu(false);
    // };

    // document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const deleteAlbumDispatch = (album) => {
    dispatch(deleteAlbumThunk(album));
    dispatch(getAllSongsThunk());
  };

  return (
    <>
      <button className={"albumButtonDotsButton"} onClick={openMenu}>
        Edit
      </button>
      <div className={"albumSettingsDiv"}>
        {showMenu && (
          <div className="albumSettingsDiv">
            <button
              className="deleteAlbumButton"
              onClick={() => deleteAlbumDispatch(allAlbumsIndex?.id)}
            >
              <i className="far fa-trash-alt"></i>
            </button>

            <UpdateAlbumModal
              albumId={allAlbumsIndex?.id}
              closeMenu={closeMenu}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default AlbumButtonDots;
