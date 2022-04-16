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

  if (!allAlbumKeys.length) {
    history.push("/Songs");
    return <h1>error</h1>;
  } else
    return (
      <div className="albumSecondDiv">
        <AlbumCarousel userInfo={userInfo} />
      </div>
    );
}
