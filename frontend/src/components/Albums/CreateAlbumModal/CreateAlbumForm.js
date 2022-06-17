import React, { useState } from "react";
import CreateAlbumForm from ".";
import { Modal } from "../../../context/Modal";
import { FaRegPlusSquare } from "react-icons/fa";

import "./CreateAlbumForm.css";

function CreateAlbumModal({ userInfo }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={"createAlbumModalButton"}
        onClick={() => setShowModal(true)}
      >
        <FaRegPlusSquare  className="plusSig"/>

        {/* <h5>Add Playlist</h5> */}
        Add Playlist
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAlbumForm setShowModal={setShowModal} userInfo={userInfo} />
        </Modal>
      )}
    </>
  );
}

export default CreateAlbumModal;
