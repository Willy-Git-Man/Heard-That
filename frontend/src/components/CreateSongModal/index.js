import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSongForm from './CreateSongFrom';

// import './CreateSongForm.css'

function CreateSongModal({userInfo}) {
  const [showModal, setShowModal] = useState(false);
console.log('userInfofvvv:', userInfo)
  return (
    <>
      <button className={'loginModalButton'} onClick={() => setShowModal(true)}>Create Song</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSongForm userInfo={userInfo}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSongModal;
