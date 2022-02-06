import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Songs from "./components/Songs";
import CreateSongModal from "./components/CreateSongModal";
import MySongs from "./components/Songs";
import AllSongs from "./components/Songs/allSongs";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const userInfo = useSelector(state => state.session.user)
  // console.log('userInfo:', userInfo.username)

  // const currentUser = useSelector(state => state.session.user)


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/Songs">
            {/* <CreateSongModal /> */}
            <MySongs userInfo={userInfo}/>
            <CreateSongModal userInfo={userInfo}/>
          </Route>

          <Route path="/AllSongs">
            <AllSongs />
          </Route>

          {/* <Route path="/CreateSongForm">
            <CreateSong />
          </Route> */}




        </Switch>
      )}
    </>
  );
}

export default App;
