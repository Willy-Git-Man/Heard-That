import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateSongForm from "./UpdateSongForm";

import "./UpdateSongForm.css";

function UpdateSongModal({ userInfo, songId }) {
  const [showModal, setShowModal] = useState(false);
  // console.log('userInfofvvv:', userInfo)
  return (
    <>
      <button
        className={"updateSongModalButton"}
        onClick={() => setShowModal(true)}
      >
        Update Song
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSongForm setShowModal={setShowModal} userInfo={userInfo} songId={songId}/>
        </Modal>
      )}
    </>
  );//pass in id into song modal then into song form
}

export default UpdateSongModal;
