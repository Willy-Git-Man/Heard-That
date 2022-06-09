import React from "react";
import AlbumCarousel from "./albumCarousel";

import "./albums.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function MyAlbums({ userInfo }) {

    return (
      <div className="albumSecondDiv">
        <AlbumCarousel userInfo={userInfo} />
      </div>
    );
}
