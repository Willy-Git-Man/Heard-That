import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Songs from "./components/Songs";
import CreateSongModal from "./components/CreateSongModal";
import MySongs from "./components/Songs";
import MyAlbums from "./components/Albums";
import AlbumSongs from "./components/Albums/albumSongs";
import CreateAlbumModal from "./components/Albums/CreateAlbumModal/CreateAlbumForm";
import AllSongs from "./components/Songs/allSongs";

import SearchBar from "./components/SearchBar/SearchBar.js";
import ProfileButton from "./components/Navigation/ProfileButton";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import NavLinks from "./components/NavLinks/navLinks";
export const PlayingContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log("hhhhh", PlayingContext);
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
          <Route exact path="/Albums/:id">
            <>
              <AlbumSongs userInfo={userInfo} />
              {/* <button className="navRouteButton">
                <NavLink className="navLinkButton" to="/">
                  Home
                </NavLink>
              </button> */}
            </>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
