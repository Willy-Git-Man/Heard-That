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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);
  const allAlbums = useSelector((state) => state.albums.albums);

  const allAlbumKeys = Object.keys(allAlbums);

  const history = useHistory();
  const albumSearchHistoryPush = (id) => {
    history.push(`/Albums/${id}`);
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
            asNavFor={firstSlider}
            ref={(slider2) => setsecondSlider(slider2)}
            slidesToShow={6}
            swipeToSlide={true}
            focusOnSelect={true}
            className="secondSlider"
          >
            <div
              className="eachAlbumMainDivSecondCarousel"
              key={allAlbums[1]?.id}
              style={{
                backgroundImage: `url(${allAlbums[1]?.imageUrl})`,
              }}
              onclick={() => albumSearchHistoryPush(1)}
            >
              <img
                className="albumImageSecondSliderNext"
                src={allAlbums[1]?.imageUrl}
                alt="Broken Img Url"
                onclick={() => albumSearchHistoryPush(1)}
              />
              <NavLink className="secondCaruselNavLink" to={`/Albums/${1}`}>
                <h1 className="albumNameLink">{allAlbums[1]?.title}</h1>
              </NavLink>
            </div>

            <div
              className="eachAlbumMainDivSecondCarousel"
              key={allAlbums[2]?.id}
              style={{
                backgroundImage: `url(${allAlbums[2]?.imageUrl})`,
              }}
              onclick={() => albumSearchHistoryPush(2)}
            >
              <img
                className="albumImageSecondSliderNext"
                src={allAlbums[2]?.imageUrl}
                alt="Broken Img Url"
                onclick={() => albumSearchHistoryPush(2)}
              />
              <NavLink className="secondCaruselNavLink" to={`/Albums/${2}`}>
                <h1 className="albumNameLink">{allAlbums[2]?.title}</h1>
              </NavLink>
            </div>

            <div
              className="eachAlbumMainDivSecondCarousel"
              key={allAlbums[3]?.id}
              style={{
                backgroundImage: `url(${allAlbums[3]?.imageUrl})`,
              }}
              onclick={() => albumSearchHistoryPush(3)}
            >
              <img
                className="albumImageSecondSliderNext"
                src={allAlbums[3]?.imageUrl}
                alt="Broken Img Url"
                onclick={() => albumSearchHistoryPush(3)}
              />
              <NavLink className="secondCaruselNavLink" to={`/Albums/${3}`}>
                <h1 className="albumNameLink">{allAlbums[3]?.title}</h1>
              </NavLink>
            </div>
{/* 
            <div
              className="eachAlbumMainDivSecondCarousel"
              key={allAlbums[2]?.id}
              style={{
                backgroundImage: `url(${allAlbums[2]?.imageUrl})`,
              }}
              onclick={() => albumSearchHistoryPush(2)}
            >
              <img
                className="albumImageSecondSliderNext"
                src={allAlbums[2]?.imageUrl}
                alt="Broken Img Url"
                onclick={() => albumSearchHistoryPush(2)}
              />
              <NavLink className="secondCaruselNavLink" to={`/Albums/${2}`}>
                <h1 className="albumNameLink">{allAlbums[2]?.title}</h1>
              </NavLink>
            </div> */}

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
                </div>
              ))}
          </Slider>
        </div>
        <div className="firstSliderDiv">
          <Slider
            asNavFor={secondSlider}
            ref={(slider1) => setfirstSlider(slider1)}
            className="firstSlider"
          >
            <div className="eachAlbumMainDiv" key={allAlbums[1]?.id}>
              <img
                className="albumImageTopCarousel"
                src={allAlbums[1]?.imageUrl}
                alt="Broken Img Url"
              />
            </div>

            <div className="eachAlbumMainDiv" key={allAlbums[2]?.id}>
              <img
                className="albumImageTopCarousel"
                src={allAlbums[2]?.imageUrl}
                alt="Broken Img Url"
              />
            </div>

            <div className="eachAlbumMainDiv" key={allAlbums[2]?.id}>
              <img
                className="albumImageTopCarousel"
                src={allAlbums[3]?.imageUrl}
                alt="Broken Img Url"
              />
            </div>

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
                  className="eachAlbumMainDiv"
                  key={allAlbums[1]?.id}
                  onclick={() => albumSearchHistoryPush(1)}
                >
                  <AlbumButtonDots allAlbumsIndex={allAlbums[index]} />
                  <img
                    className="albumImageTopCarousel"
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
