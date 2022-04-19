import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
// import Songs from "./components/Songs";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import SignupFormModal from "./SignupFormModal";
import LoginFormModal from "./LoginFormModal";
export const PlayingContext = React.createContext();

function LoginRoute() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const userInfo = useSelector((state) => state.session.user);
    if (!userInfo)
    return (
      <>
        <div className={"mainNav"}>
          <div className={"profileDiv"}>
            <div className="loginDiv">
              <LoginFormModal />
              <SignupFormModal />

              <div className="loginMessage">
                <h1 className="welcomeGreetingTop">Welcome to Heard-That!</h1>
                <h2>Login or Signup below to start listening</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    }

export default LoginRoute;
