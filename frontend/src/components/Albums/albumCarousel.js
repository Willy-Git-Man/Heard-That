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
  const [firstSlider, setfirstSlider] = useState();
  const [secondSlider, setsecondSlider] = useState();

  const { id } = useParams();
  const history = useHistory();

  const allAlbums = useSelector((state) => state.albums.albums);
  console.log('allAlbums', allAlbums)
  const allAlbumKeys = Object.keys(allAlbums);
  const allAlbumValues = Object.values(allAlbums);
  const length = allAlbumKeys.length;

  let test = {}
  const will = () => {
    for (let i = 0; i < allAlbumValues.length; i++) {
      test[i + 1] = allAlbumValues[i]
    }
    return test
  }
  will()
  console.log(test, length)
// console.log(test[id].id,length)

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    const rightArrow = () => {
      onClick();
        // if (test[id].id)
       history.push(`/Albums/${test[id].id + 1}`);
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

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const leftArrow = () => {
      onClick();

      if (+id - 1 === 0) history.push(`/Albums/${length}`);
      else history.push(`/Albums/${+id - 1}`);
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);

  // const history = useHistory();
  const albumSearchHistoryPush = (id) => {
    history.push(`/Albums/${id}`);
  };

  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    // speed: 500,
    fade: true,
    // autoplay: true,
    speed: 2000,
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,

    // speed: 500,
    // fade: true,
    // autoplay: true,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  if (userInfo === undefined) {
    history.push("/");
  }

  if (!allAlbumKeys.length) {
    history.push("/Albums/1");
    return null;
  } else
    return (
      <div className="mainCarouselDiv">
        {/* <h2 className="albumMessage">Welcome</h2> */}

        <div className="secondSliderDiv">
          <Slider
            {...settings1}
            asNavFor={firstSlider}
            ref={(slider2) => setsecondSlider(slider2)}
          >

{allAlbumKeys
              ?.filter(
                (index) =>
                  allAlbums[index]?.id <= 3
              )
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
                  <NavLink className="secondCaruselNavLink" to={`/Albums/${album}`}>
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
          </Slider>
        </div>

        <div className="firstSliderDiv">
          <Slider
            {...settings2}
            // asNavFor={firstSlider}
            // ref={(slider2) => setsecondSlider(slider2)}
          >
                   {allAlbumKeys
              ?.filter(
                (index) =>
                  allAlbums[index]?.id <= 3
              )
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
                  <NavLink className="secondCaruselNavLink" to={`/Albums/${album}`}>
                    <h1 className="albumNameLink">{allAlbums[album]?.title}</h1>
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
              .map((index) => (
                <div
                  className="eachAlbumMainDivSecondCarousel"
                  key={allAlbums[1]?.id}
                  onclick={() => albumSearchHistoryPush(1)}
                >
                  <AlbumButtonDots allAlbumsIndex={allAlbums[index]} />
                  <img
                    className="albumImageSecondSliderNext"
                    src={allAlbums[index]?.imageUrl}
                    alt="Broken Img Url"
                  />
                  <p className="albumNameLink">{allAlbums[index]?.title}</p>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    );
}
