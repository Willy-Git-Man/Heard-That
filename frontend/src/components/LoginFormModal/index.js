import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

import './LoginForm.css'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()
const test = () => {
  history.push('/Albums/1')
  setShowModal(false)
}

  return (
    <>
      <button className={'loginModalButton'} onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => test()}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
