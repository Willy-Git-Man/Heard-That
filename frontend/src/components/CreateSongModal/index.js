import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSongForm from './CreateSongForm';

import './CreateSongForm.css'

function CreateSongModal({userInfo}) {
  const [showModal, setShowModal] = useState(false);
// console.log('userInfofvvv:', userInfo)
  return (
    <>
      <button className={'createSongModalButton'} onClick={() => setShowModal(true)}>Create Song</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSongForm setShowModal={setShowModal} userInfo={userInfo}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSongModal;
