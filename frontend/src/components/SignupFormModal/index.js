
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

import SignupForm from "./SignupForm";

import './SignupForm.css'
// import '../LoginFormModal/LoginForm.css'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={'signUpButton'} onClick={() => setShowModal(true)}>Signup</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
