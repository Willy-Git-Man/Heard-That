import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import Songs from "./components/Songs";
import AlbumSongs from "./components/Albums/albumSongs";


import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
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
