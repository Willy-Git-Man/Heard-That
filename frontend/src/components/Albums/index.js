import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteAlbumThunk, getAllAlbumsThunk } from "../../store/albums";
import { getAllSongsThunk } from "../../store/songs";
import "./albums.css";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import React from "react";

import AlbumCarousel from "./albumCarousel";

export default function MyAlbums({ userInfo }) {
 
    return (
      <div className="albumSecondDiv">
        <AlbumCarousel userInfo={userInfo} />
        {/* <h1 className="splashMessage">Welcome back, Doctor</h1> */}
      </div>
    );
}
