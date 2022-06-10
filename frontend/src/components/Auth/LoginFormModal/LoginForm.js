import React, {useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'
import SignupFormModal from "../SignupFormModal";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()



  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
          // history.push('/songs')
        }
      }
      );

  };

  return (
    <>
    <div className="loginFormDiv">
      <h3 className='loginTitle'>Heard That</h3>

      <form className="formDiv" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
          <input
          className="loginInputs"
          placeholder="Username or Email"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <input
          className="loginInputs"
          placeholder="Password"

            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button className="loginButtons" type="submit">
          Log In
        </button>

        <button
          className="loginButtons"
          type="submit"
          onClick={() => {
            setCredential("Demo-lition");
            setPassword("password");
          }}
        >
          Demo
        </button>
      </form>
    </div>
      <div className='signUpOption'>
        <p className='text'>
        Don't have an account?
        </p>
      <SignupFormModal />
      </div>
      <div className="gitLinkedInDivsSplash">

<a href="https://github.com/Willy-Git-Man/Heard-That" target="blank"><h2><FaGithub /></h2></a>

<a href="https://www.linkedin.com/in/william-b-grossman/" target="blank"><h2><FaLinkedinIn /></h2></a>
</div>
    </>

  );
}

export default LoginForm;
