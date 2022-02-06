import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Songs from "./components/Songs";
import CreateSong from "./components/Songs/createSong";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // const userInfo = useSelector(state => state.session.user)
  // console.log('userInfo:', userInfo.username)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/Songs">
            <Songs />
          </Route>

          <Route path="/CreateSongForm">
            <CreateSong />
          </Route>




        </Switch>
      )}
    </>
  );
}

export default App;
