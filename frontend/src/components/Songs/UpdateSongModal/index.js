import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import UpdateSongForm from "./UpdateSongForm";

import "./UpdateSongForm.css";

function UpdateSongModal({ userInfo, songId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={"updateSongModalButto"}
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-wrench"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSongForm
            setShowModal={setShowModal}
            userInfo={userInfo}
            songId={songId}
          />
        </Modal>
      )}
    </>
  );
}

export default UpdateSongModal;
