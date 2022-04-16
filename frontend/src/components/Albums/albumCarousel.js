import React, { useState } from 'react';
import Slider from 'react-slick';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { deleteAlbumThunk, getAllAlbumsThunk } from '../../store/albums';
import { getAllSongsThunk } from '../../store/songs';
import UpdateAlbumModal from '../UpdateAlbumModal';
import AlbumButtonDots from './albumButtonDots';

export default function AlbumCarousel({userInfo}) {
  const [firstSlider, setfirstSlider] = useState();
  const [secondSlider, setsecondSlider] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsThunk());
  }, [dispatch]);
const {test, test2} = useParams()
console.log('id:', test,test2)
  const allAlbums = useSelector((state) => state.albums.albums);

  const allAlbumKeys = Object.keys(allAlbums);

  const history = useHistory();

  if (userInfo === undefined) {
    history.push("/");
  }

  const deleteAlbumDispatch = (album) => {
    dispatch(deleteAlbumThunk(album));
    dispatch(getAllSongsThunk());
  };

  if (!allAlbumKeys.length) {
    history.push("/Songs");
    return <h1>error</h1>;
  } else

    return (
    <div className="eachDivInCarousel">
      <h2>Welcome</h2>
      {/* <Slider asNavFor={secondSlider} ref={(slider1) => setfirstSlider(slider1)}>

<div className="eachAlbumMainDiv" key={allAlbums[1]?.id}>
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
      <div className="eachAlbumMainDiv" key={allAlbums[index]?.id}>
      <img
        className="albumImage"
        src={allAlbums[index]?.imageUrl}
        alt="Broken Img Url"
        />
      <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
        <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
      </NavLink>

      <button
        className="deleteAlbumButton"
        onClick={() => deleteAlbumDispatch(allAlbums[index]?.id)}
        >
        <i className="far fa-trash-alt"></i>
      </button>

      <UpdateAlbumModal albumId={allAlbums[index]?.id} />
    </div>
  ))}
      </Slider> */}
      {/* <h4>Second Slider</h4> */}
      <Slider
        asNavFor={firstSlider}
        ref={(slider2) => setsecondSlider(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
<div className="eachAlbumMainDiv" key={allAlbums[1]?.id} >
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
      <div className="eachAlbumMainDiv2" key={allAlbums[index]?.id} style={{ backgroundImage: `url(${allAlbums[index]?.imageUrl})`   }}>
        <AlbumButtonDots allAlbumsIndex={allAlbums[index]}/>
      <img
        className="albumImage"
        src={allAlbums[index]?.imageUrl}
        alt="Broken Img Url"
        />
      <NavLink className="albumImageNavLink" to={`/Albums/${index}`}>
        <h1 className="albumNameLink">{allAlbums[index]?.title}</h1>
      </NavLink>
      {/* <button
      className="deleteAlbumButton"
      onClick={() => deleteAlbumDispatch(allAlbums[index]?.id)}
      >
        <i className="far fa-trash-alt"></i>
      </button>

      <UpdateAlbumModal albumId={allAlbums[index]?.id} /> */}
    </div>
  ))}
      </Slider>
    </div>
  );
}
