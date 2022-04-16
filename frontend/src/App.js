import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AlbumSongs from "./components/Albums/albumSongs";


import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const userInfo = useSelector((state) => state.session.user);


  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/Albums/:id">
            <AlbumSongs userInfo={userInfo} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
