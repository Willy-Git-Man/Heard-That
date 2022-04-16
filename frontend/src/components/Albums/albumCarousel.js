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
  const { test, test2 } = useParams();
  console.log("id:", test, test2);
  const allAlbums = useSelector((state) => state.albums.albums);

  const allAlbumKeys = Object.keys(allAlbums);

  const history = useHistory();

  if (userInfo === undefined) {
    history.push("/");
  }

  if (!allAlbumKeys.length) {
    history.push("/Albums/1");
    return null
  } else
    return (
      <div className="eachDivInCarousel">
        <h2 className="albumMessage">Welcome</h2>
        <Slider
          asNavFor={secondSlider}
          ref={(slider1) => setfirstSlider(slider1)}
        >
          <div className="eachAlbumMainDiv" key={allAlbums[1]?.id}  >
            <img
              className="albumImageTopCarousel"
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
              <div
                className="eachAlbumMainDiv2"
                key={allAlbums[index]?.id}
                style={{
                  backgroundImage: `url(${allAlbums[index]?.imageUrl})`,
                }}
              >
                <AlbumButtonDots allAlbumsIndex={allAlbums[index]} />
                <img
                  className="albumImageTopCarousel"
                  src={allAlbums[index]?.imageUrl}
                  alt="Broken Img Url"
                />
                <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
                  <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
                </NavLink>
              </div>
            ))}
        </Slider>
        {/* <h4>Second Slider</h4> */}
        <Slider
          asNavFor={firstSlider}
          ref={(slider2) => setsecondSlider(slider2)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="eachAlbumMainDiv" key={allAlbums[1]?.id}>
            {/* <AlbumButtonDots /> */}
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
              <div
                className="eachAlbumMainDiv2"
                key={allAlbums[index]?.id}
                style={{
                  backgroundImage: `url(${allAlbums[index]?.imageUrl})`,
                }}
              >
                <img
                  className="albumImage"
                  src={allAlbums[index]?.imageUrl}
                  alt="Broken Img Url"
                />
                <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
                  <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
                </NavLink>
              </div>
            ))}
        </Slider>
      </div>
    );
}
