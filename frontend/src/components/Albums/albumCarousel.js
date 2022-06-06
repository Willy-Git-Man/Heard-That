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

  const lowerCarouselSettings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,

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
          <div className="mainAlbumsEachAlbumDiv" key={allAlbums[album]?.id}>

            <div className="albumPictureDiv"
              style={{
                backgroundImage: `url(${allAlbums[album]?.imageUrl})`,
              }}
            >
              <NavLink
                className="mainAlbumsEachAlbumDivNavLink"
                to={`/Albums/${allAlbums[album].id}`}
              >
                {allAlbums[album].id !== +id && (
                  <h1 className="albumCarouselAlbumTitle" style={{
                  }}>
                    {allAlbums[album]?.title}
                  </h1>
                )}

                {allAlbums[album].id !== +id && (
                  <h1 className="albumCarouselAlbumTitle" style={{
                  }}>
                    {allAlbums[album]?.title}
                  </h1>
                )}
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>

      <Slider className="test"
        {...lowerCarouselSettings}
      >
        <div className="mainAlbumsEachAlbumDiv2" key={allAlbums[+id]?.id}
        >
          <NavLink
            className="mainAlbumsEachAlbumDivNavLink"
            to={`/Albums/${allAlbums[+id]?.id}`}
          >
            <div
              className="albumNameLinkLower"
              style={{
                backgroundImage: `url(${allAlbums[+id]?.imageUrl})`,
              }}
            >
              <h1 className="albumCarouselAlbumTitleLower">
                {allAlbums[+id]?.title}
              </h1>
            </div>
          </NavLink>
        </div>
      </Slider>
    </div>
  );
}
