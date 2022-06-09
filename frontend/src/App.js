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
import { getAllAlbumsThunk } from "./store/albums";
import { getAllSongsThunk } from "./store/songs";

import LoginRoute from "./components/Auth/LoginRoute";
export const PlayingContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(getAllAlbumsThunk());
    dispatch(getAllSongsThunk());

    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const userInfo = useSelector((state) => state.session.user);
  const albumState = useSelector((state) => state.albums.albums);

  return (
    <>

      <Switch>
        {!userInfo && (
          <Route path="/">
            <Redirect to="/" />
            <LoginRoute />

          </Route>
        )}

        <ProtectedRoute exact path="/Albums/:id">
          <AlbumSongs userInfo={userInfo} albumState={albumState} />
        </ProtectedRoute>
        <ProtectedRoute path="/">
          <>
            <Redirect to="/Albums/1" />
          </>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
