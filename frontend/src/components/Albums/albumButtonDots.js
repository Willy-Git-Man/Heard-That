import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteAlbumThunk } from "../../store/albums";
// import { Redirect } from "react-router";
import * as sessionActions from "../../store/session";
import { getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../UpdateAlbumModal";

function AlbumButtonDots({ user, allAlbumsIndex }) {
  const [showMenu, setShowMenu] = useState(false);
console.log('allAlbumsIndex:', allAlbumsIndex)
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  const deleteAlbumDispatch = (album) => {
    dispatch(deleteAlbumThunk(album));
    dispatch(getAllSongsThunk());
  };

  return (
    <>
      <button className={"albumButtonDotsButton"} onClick={openMenu}>
       Edit
        {/* <i className="fas fa-user-circle" /> */}
        {/* <i className="fab fa-grav"></i> */}
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

      <UpdateAlbumModal albumId={allAlbumsIndex?.id} closeMenu={closeMenu}/>
          </div>
        )}
      </div>
    </>
  );
}

export default AlbumButtonDots;
