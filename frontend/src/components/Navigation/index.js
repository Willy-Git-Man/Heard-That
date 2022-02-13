import React from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

import NavLinks from "../NavLinks/navLinks";

import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navDiv">
        <NavLinks />
        <ProfileButton user={sessionUser} />
      </div>
    );
    // <Redirect to="/songs" />;
  } else {
    sessionLinks = (
      <div className="loginDiv">
        <LoginFormModal />
        <SignupFormModal />

        <div className="loginMessage">

          {/* <i className="fa fa-music"></i>
          <i className="fa fa-music"></i> */}
          <h1 className="welcomeGreetingTop" >Welcome to Heard-That!</h1>
          <h2>Login or Signup below to start listening</h2>
         
          {/* <h3>Upon entry you can add your songs,</h3>
          <h4>Add your playlists,</h4>
          <h5>And update or remove them as you please!</h5> */}
          {/* <i className="fa fa-music"></i>
          <i className="fa fa-music"></i> */}



        </div>
      </div>
    );
  }

  if (sessionUser) {
    // history.push('/Songs' || '/Albums' || '/Albums/:id')
    return (
      <>
      <ul className="navUl">
        <li className="navLi">
          {/* <NavLink exact to="/">Home</NavLink> */}

          {isLoaded && sessionLinks}
        </li>
      </ul>
      <div className="splashMessage">

          {/* <i className="fa fa-music"></i>
          <i className="fa fa-music"></i> */}
          {/* <h1 className="welcomeGreetingTop" >Welcome to Heard-That!</h1> */}
          {/* <h3>Upon entry you can add your songs,</h3>
          <h4>Add your playlists,</h4>
          <h5>And update or remove them as you please!</h5> */}
          {/* <i className="fa fa-music"></i>
          <i className="fa fa-music"></i> */}



        </div>
      </>

    )
  } else

  return (
    <>
    <div className={"mainNav"}>
          <div className={"profileDiv"}>{isLoaded && sessionLinks}</div>÷
        </div>
    </>
  );
}

export default Navigation;
