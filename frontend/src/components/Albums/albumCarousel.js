import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AlbumCarousel({ userInfo }) {
  const { id } = useParams();
  const history = useHistory();

  const allAlbums = useSelector((state) => state.albums.albums);

  const allAlbumKeys = Object.keys(allAlbums);

  const allAlbumValues = Object.values(allAlbums);
  const userAlbums = allAlbumValues.filter(
    (album) => album.userId === userInfo.id || album.userId === 2
  );

  const length = userAlbums.length;

  const multipleAlbumCarouselSettings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,

    // speed: 5,
    // fade: true,
    // autoplay: true,
    // speed: 1000,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  if (userInfo === undefined) {
    history.push("/");
  }
  const rightArrowNextId = () => {
    for (let i = 0; i < userAlbums.length; i++) {
      // console.log("test", allAlbums[i])
      if (+userAlbums[i].id === +id) return +userAlbums[i + 1].id;
      if (+userAlbums[i + 1].id === +userAlbums[length - 1].id) return 1;
    }
    return;
  };

  const leftArrowNextId = () => {
    if (+id === 1) return +userAlbums[length - 1].id;
    for (let i = 0; i < userAlbums.length; i++) {
      if (+userAlbums[i].id === +id) return +userAlbums[i - 1].id;
    }
    return;
  };

  const handlePicture = (e) => {
    e.target.src =
      "https://cdn.pixabay.com/photo/2020/07/19/20/48/broken-5421234_1280.png";
  };

  function RightArrow(props) {
    const { className, style, onClick } = props;
    const rightArrow = () => {
      onClick();
      history.push(`/Albums/${rightArrowNextId()}`);
    };
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0D1B2A",
          height: "5vh",
          width: "5vh",
        }}
        onClick={() => rightArrow()}
      />
    );
  }

  function LeftArrow(props) {
    const { className, style, onClick } = props;
    const leftArrow = () => {
      onClick();
      history.push(`/Albums/${leftArrowNextId()}`);
    };
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0D1B2A",

          height: "5vh",
          width: "5vh",
        }}
        onClick={() => leftArrow()}
      />
    );
  }

  return (
    <div className="mainCarouselDiv">
      <Slider
        {...multipleAlbumCarouselSettings}
        // asNavFor={firstSlider}
        // ref={(slider2) => setsecondSlider(slider2)}
      >
        {allAlbumKeys.map((album) => (
          <div className="mainAlbumsEachAlbumDiv" key={allAlbums[album].id}>
            {/* <img
              className="mainAlbumsEachAlbumDivCarouselImage"
              src={allAlbums[album]?.imageUrl}
              alt="Broken Img Url"
              onError={handlePicture}
            /> */}
            <NavLink
              className="mainAlbumsEachAlbumDivNavLink"
              to={`/Albums/${allAlbums[album].id}`}
            >
              <div
                className="albumNameLink"
                style={{
                  backgroundImage: `url(${allAlbums[album]?.imageUrl})`,
                }}
              >
                <h1 className="albumCarouselAlbumTitle">
                  {allAlbums[album]?.title}
                </h1>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
}
