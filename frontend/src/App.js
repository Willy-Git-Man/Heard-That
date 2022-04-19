import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
// import Songs from "./components/Songs";
import AlbumSongs from "./components/Albums/albumSongs";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import LoginFormModal from "./components/Auth/LoginFormModal";
import SignupFormModal from "./components/Auth/SignupFormModal";
export const PlayingContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const userInfo = useSelector((state) => state.session.user);
  const songInfo = useSelector((state) => state.songs);
  //TODO: THIS LINE ^ IS KEEPING CAROUSEL WORKING

  if (!userInfo)
    return (
      <>
        <div className={"mainNav"}>
          {/* <div className={"profileDiv"}>{isLoaded && sessionLinks}</div> */}
          <div className={"profileDiv"}>
            {" "}
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
  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}


        <Switch>
          <ProtectedRoute exact path="/">
            <>
              <Redirect to="/Albums/1" />

            </>
          </ProtectedRoute>
          <Route exact path="/Albums/:id">
            <>
              <AlbumSongs userInfo={userInfo} />
            </>
          </Route>
        </Switch>
      
    </>
  );
}

export default App;
