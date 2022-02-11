import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateAlbumForm from "./UpdateAlbumForm";

import "./UpdateAlbumForm.css";

function UpdateAlbumModal({ userInfo, albumId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={"updateSongModalButton"}
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-wrench"></i>

      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateAlbumForm setShowModal={setShowModal} userInfo={userInfo} albumId={albumId} />
        </Modal>
      )}
    </>
  );//pass in id into song modal then into song form
}

export default UpdateAlbumModal;
