import React, { useState } from "react";
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllAlbumsThunk } from "../../store/albums";
import AlbumButtonDots from "./albumButtonDots";

export default function AlbumCarousel({ userInfo }) {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [firstSlider, setfirstSlider] = useState();
  const [secondSlider, setsecondSlider] = useState();

  // useEffect(() => {
  //   dispatch(getAllAlbumsThunk());
  // }, [dispatch]);

  const allAlbums = useSelector((state) => state.albums.albums);
  const allAlbumKeys = Object.keys(allAlbums);
  const length = allAlbumKeys.length;
  // console.log("allAlbumKeys length:", allAlbumKeys[length -1])

  const allAlbumValues = Object.values(allAlbums);
  // console.log("allAlbumValues:", allAlbumValues)

  const allAlbumEntries = Object.entries(allAlbums);
// console.log("allAlbumEntries:",allAlbumEntries)



  const rightArrowNextId = () => {
    for (let i = 0; i < allAlbumKeys.length; i++) {
      if (+allAlbumKeys[i] === +id) return +allAlbumKeys[i + 1]
      if (+allAlbumKeys[i + 1] === +allAlbumKeys[length -1]) return 1
    }
    return;
  };

  const leftArrowNextId = () => {
    if (+id - 1 === 0) return allAlbumKeys[length -1]
    console.log('+id yooo', +id)
    // return allAlbumKeys[length -1]
    for (let i = 0; i < allAlbumKeys.length; i++) {
      console.log('album keys at i',+allAlbumKeys[i])
      console.log(+allAlbumKeys[i] === +allAlbumKeys[0])
      if (+allAlbumKeys[i] === +id) return +allAlbumKeys[i - 1]

    }
    return;
  };
  const multipleAlbumCarouselSettings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,

    // speed: 500,
    // fade: true,
    // autoplay: true,
    speed: 1000,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  if (userInfo === undefined) {
    history.push("/");
  }

  // const settings1 = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 1,
  //   // speed: 500,
  //   fade: true,
  //   // autoplay: true,
  //   speed: 2000,
  // };
  const mainAlbums = allAlbumKeys?.filter((album) => allAlbums[album]?.id <= 3);


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
          background: "red",
          height: "2.5vh",
          width: "2.5vh",
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
          background: "red",
          height: "2.5vh",
          width: "2.5vh",
        }}
        onClick={() => leftArrow()}
      />
    );
  }

    return (
      <div className="mainCarouselDiv">
        <div className="firstOuterSliderDiv">
          <Slider
            {...multipleAlbumCarouselSettings}
            // asNavFor={firstSlider}
            // ref={(slider2) => setsecondSlider(slider2)}
          >
            {mainAlbums.map((album) => (
              <div className="mainAlbumsEachAlbumDiv" key={allAlbums[album].id}>
                <img
                  className="mainAlbumsEachAlbumDivCarouselImage"
                  src={allAlbums[album]?.imageUrl}
                  alt="Broken Img Url"
                  onError={handlePicture}
                />
                <NavLink
                  className="mainAlbumsEachAlbumDivNavLink"
                  // activeClassName="selected"
                  to={`/Albums/${allAlbums[album].id}`}
                >
                  <h1 className="albumNameLink">
                    {allAlbums[album]?.title}
                  </h1>
                </NavLink>
              </div>
            ))}

            {allAlbumKeys
              ?.filter(
                (index) =>
                  allAlbums[index]?.userId === userInfo.id &&
                  allAlbums[index]?.id !== 1 &&
                  allAlbums[index]?.id !== 2 &&
                  allAlbums[index]?.id !== 3
              )
              .map((album) => (
                <div
                  className="mainAlbumsEachAlbumDiv"
                  key={allAlbums[album].id}
                >
                  <img
                    className="mainAlbumsEachAlbumDivCarouselImage"
                    src={allAlbums[album]?.imageUrl}
                    alt="Broken Img Url"
                    onError={handlePicture}
                  />
                  {/* <AlbumButtonDots allAlbumsIndex={allAlbums[album]} /> */}

                  <NavLink
                    className="mainAlbumsEachAlbumDivNavLink"
                    to={`/Albums/${allAlbums[album].id}`}
                  >
                    <h1 className="albumNameLink">
                      {allAlbums[album]?.title}
                    </h1>
                  </NavLink>
                </div>
              ))}
          </Slider>
        </div>
        {/* <Slider
          {...settings1}
          asNavFor={firstSlider}
          ref={(slider2) => setsecondSlider(slider2)}
        >
          {allAlbumKeys
            ?.filter((index) => allAlbums[index]?.id <= 3)
            .map((album) => (
              <div
                className="eachAlbumMainDivSecondCarousel"
                key={allAlbums[id]?.id}
                style={{
                  backgroundImage: `url(${allAlbums[album]?.imageUrl})`,
                }}
                onclick={() => albumSearchHistoryPush(album)}
              >
                <img
                  className="albumImageSecondSliderNext"
                  src={allAlbums[album]?.imageUrl}
                  alt="Broken Img Url"
                  onclick={() => albumSearchHistoryPush(album)}
                />
                <NavLink
                  className="secondCaruselNavLink"
                  to={`/Albums/${album}`}
                >
                  <h1 className="albumNameLink">{allAlbums[album]?.title}</h1>
                </NavLink>
              </div>
            ))}

          {allAlbumKeys
            ?.filter(
              (index) =>
                allAlbums[index]?.userId === userInfo.id &&
                allAlbums[index]?.id !== 1 &&
                allAlbums[index]?.id !== 2
            )
            .map((album) => (
              <div
                className="eachAlbumMainDivSecondCarousel"
                key={allAlbums[album]?.id}
                style={{
                  backgroundImage: `url(${allAlbums[album]?.imageUrl})`,
                }}
                onclick={() => albumSearchHistoryPush(album.id)}
              >
                <img
                  className="albumImageSecondSliderNext"
                  src={allAlbums[album]?.imageUrl}
                  alt="Broken Img Url"
                  onclick={() => albumSearchHistoryPush(album.id)}
                />
                <NavLink
                  className="secondCaruselNavLink"
                  to={`/Albums/${album}`}
                >
                  <h1 className="albumNameLink">{allAlbums[album]?.title}</h1>
                </NavLink>
                <AlbumButtonDots allAlbumsIndex={allAlbums[album]} />
              </div>
            ))}
        </Slider> */}
      </div>
    );
}
