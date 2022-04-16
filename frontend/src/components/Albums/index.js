import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllAlbumsThunk } from "../../store/albums";
import AlbumCarousel from "./albumCarousel";
import "./albums.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    history.push(`/songs`);
    return <h1>error</h1>;
  } else
    return (
      <div className="albumSecondDiv">
        <AlbumCarousel userInfo={userInfo} />
      </div>
    );
}
