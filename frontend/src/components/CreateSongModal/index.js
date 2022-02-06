import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSong from '../Songs/createSong';
import CreateSongForm from './CreateSongFrom';

// import './CreateSongForm.css'

function CreateSongModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={'loginModalButton'} onClick={() => setShowModal(true)}>Create Song</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSongForm />
        </Modal>
      )}
    </>
  );
}

export default CreateSongModal;
