import React, {useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'
import SignupFormModal from "../SignupFormModal";

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
    <div className="createNewSongDiv">
      <form className="createNewSongForm" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className={"createSongButton"} type="submit">
          Log In
        </button>

        <button
          className={"createSongButton"}
          type="submit"
          onClick={() => {
            setCredential("Demo-lition");
            setPassword("password");
          }}
        >
          Demo
        </button>
      </form>
      <SignupFormModal />
    </div>
  );
}

export default LoginForm;
