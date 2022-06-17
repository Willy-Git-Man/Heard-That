import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateSongForm from './CreateSongForm';
import { FaRegPlusSquare } from "react-icons/fa";


import './CreateSongForm.css'

function CreateSongModal({userInfo}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>

      <button className={'createSongModalButton'} onClick={() => setShowModal(true)}>
      <FaRegPlusSquare  classNAme="plusSign"/>

      Add Song


         </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSongForm setShowModal={setShowModal} userInfo={userInfo}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSongModal;
