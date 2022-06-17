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

  console.log(userAlbums, allAlbumKeys)

  const length = userAlbums.length;

  const multipleAlbumCarouselSettings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    // speed: 1000,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  const lowerCarouselSettings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
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
          // fontSize: "50px",
          background: "#4ECCA3",
          borderRadius: "20px",

          height: "2.5vh",
          width: "2.5vh",
          zIndex: "9999"
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
          background: "#4ECCA3",
          color: "black",
          borderRadius: "20px",

          height: "2.5vh",
          width: "2.5vh",
          zIndex: "9999"
        }}
        onClick={() => leftArrow()}
      />
    );
  }

  return (
    <div className="mainCarouselDiv">
      <Slider {...multipleAlbumCarouselSettings} className="testSlider">
        {userAlbums.map((album) => (
          <div className="albumCarouselEachAlbumDiv"   style={{
            backgroundImage: `url(${album?.imageUrl})`,
           }} >

           <NavLink
           className="mainAlbumsEachAlbumDivNavLink"
           to={`/Albums/${album.id}`}

            >
          <h1 className="albumCarouselTitle" style={{
            backgroundImage: `url(${album?.imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}> </h1>
          </NavLink>
          <h1 className="albumCarouselTitleTest">{album.title}</h1>
           </div>
        ))}
        {/* {allAlbumKeys.map((album) => (
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
        ))} */}
      </Slider>



      {/* <div
        className="albumNameLinkLower"
        style={{
          backgroundImage: `url(${allAlbums[+id]?.imageUrl})`,
        }}
      >
        <h1 className="albumCarouselAlbumTitleLower"> {allAlbums[+id]?.title}</h1>
      </div> */}
    </div>
  );
}
