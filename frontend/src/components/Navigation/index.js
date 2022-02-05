import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

import NavLinks from '../NavLinks/navLinks';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      <NavLinks />
      </>
    );
  } else {

    sessionLinks = (
      <>

        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <>
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </>
  );
}

export default Navigation;
