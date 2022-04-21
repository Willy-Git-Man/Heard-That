import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UpdateSongForm from "./UpdateSongForm";

import "./UpdateSongForm.css";

function UpdateSongModal({ userInfo, songId, closeMenu }) {
  const [showModal, setShowModal] = useState(false);
  const test = () => {
    setShowModal(false)
    closeMenu()

  }
  return (
    <>
      <button
        className={"updateSongModalButton"}
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-wrench"></i>
      </button>
      {showModal && (
        // <Modal onClose={() => setShowModal(false)}>
        <Modal onClose={() => setShowModal(false)}>

          <UpdateSongForm
            setShowModal={setShowModal}
            userInfo={userInfo}
            songId={songId}
            closeMenu={closeMenu}
          />
        </Modal>
      )}
    </>
  );
}

export default UpdateSongModal;
