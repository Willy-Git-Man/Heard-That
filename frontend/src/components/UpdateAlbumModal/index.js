import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateAlbumForm from "./UpdateAlbumForm";

import "./UpdateAlbumForm.css";

function UpdateAlbumModal({ userInfo, albumId, closeMenu }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={"updateAlbumModalButton"}
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-wrench"></i>


      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateAlbumForm setShowModal={setShowModal} userInfo={userInfo} albumId={albumId} closeMenu={closeMenu}/>
        </Modal>
      )}
    </>
  );//pass in id into song modal then into song form
}

export default UpdateAlbumModal;
