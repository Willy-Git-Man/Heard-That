import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {
  deleteAlbumThunk,
  getAllAlbumSongsThunk,
  getAllAlbumsThunk,
} from "../../store/albums";
import { getAllSongsThunk } from "../../store/songs";
import UpdateAlbumModal from "../UpdateAlbumModal";
import "./albums.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import SimpleSlider from "./albumCarousel";
import SyncSlider from "./albumCarousel";
import AlbumCarousel from "./albumCarousel";

export default function MyAlbums({ userInfo }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  const allAlbums = useSelector((state) => state.albums.albums);

  const allAlbumKeys = Object.keys(allAlbums);

  const history = useHistory();

  if (userInfo === undefined) {
    history.push("/");
  }

  const deleteAlbumDispatch = (album) => {
    dispatch(deleteAlbumThunk(album));
    dispatch(getAllSongsThunk());
  };

  if (!allAlbumKeys.length) {
    history.push("/Songs");
    return <h1>error</h1>;
  } else

    return (
      <div className="albumSecondDiv">
        <AlbumCarousel userInfo={ userInfo }/>

{/*
        <h1 className="welcome">{userInfo?.username}'s Albums</h1>

        <div className="eachAlbumMainDiv" key={allAlbums[1]?.id}>
          <img
            className="albumImage"
            src={allAlbums[1]?.imageUrl}
            alt="Broken Img Url"
          />
          <NavLink className="albumImageNavLink" to={`/Albums/${1}`}>
            <h1 className="albumNameLink">{allAlbums[1]?.title}</h1>
          </NavLink>
        </div>


        {allAlbumKeys
          ?.filter(
            (index) =>
            allAlbums[index]?.userId === userInfo.id &&
            allAlbums[index]?.id !== 1
            )
            .map((index) => (
              <div className="eachAlbumMainDiv" key={allAlbums[index]?.id}>
              <img
                className="albumImage"
                src={allAlbums[index]?.imageUrl}
                alt="Broken Img Url"
                />
              <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
                <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
              </NavLink>

              <button
                className="deleteAlbumButton"
                onClick={() => deleteAlbumDispatch(allAlbums[index]?.id)}
                >
                <i className="far fa-trash-alt"></i>
              </button>

              <UpdateAlbumModal albumId={allAlbums[index]?.id} />
            </div>
          ))} */}
      </div>
    );
}
