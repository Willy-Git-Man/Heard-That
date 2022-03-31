import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Songs from "./components/Songs";
import CreateSongModal from "./components/CreateSongModal";
import MySongs from "./components/Songs";
import MyAlbums from "./components/Albums";
import AlbumSongs from "./components/Albums/albumSongs";
import CreateAlbumModal from "./components/CreateAlbumModal/CreateAlbumForm";
import AllSongs from "./components/Songs/allSongs";

import SearchBar from './components/SearchBar/SearchBar.js'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);





  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const userInfo = useSelector((state) => state.session.user);
  const songInfo = useSelector((state) => state.songs);

  // const currentUser = useSelector(state => state.session.user)/

  return (
    <>


      <Navigation isLoaded={isLoaded} />



      {isLoaded && (
        <Switch>


          <Route exact path="/Songs">
            <SearchBar />
            <MySongs userInfo={userInfo} setShowModal={setShowModal} />
            <CreateSongModal userInfo={userInfo} />
          </Route>

          {/* <Route path="/AllSongs"><AllSongs /></Route> */}
          <Route exact path="/Albums">
            <MyAlbums userInfo={userInfo} />
            <CreateAlbumModal userInfo={userInfo} />
          </Route>

          <Route exact path="/Albums/:id">
          {/* <SearchBar /> */}

            <AlbumSongs userInfo={userInfo} />
          </Route>

        {/* <Route path="/allSongs">
          <AllSongs />
        </Route> */}

        </Switch>
      )}
    </>
  );
}

export default App;
