import React, { useState } from 'react';
import CreateAlbumForm from '.';
import { Modal } from '../../context/Modal';

import './CreateAlbumForm.css'

function CreateAlbumModal({userInfo}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={'createAlbumModalButton'} onClick={() => setShowModal(true)}><i className="fa fa-music"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateAlbumForm setShowModal={setShowModal} userInfo={userInfo} />
        </Modal>
      )}
    </>
  );
}

export default CreateAlbumModal;
