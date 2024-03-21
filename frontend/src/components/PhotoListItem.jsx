import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  console
  const location = props.data.location

  return (
    <div className="photo-list__item">
    <PhotoFavButton />
    <img className="photo-list__image" src={props.data.imageSource} alt="image" />
    <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={props.data.profile} alt="profile" />
    <div className="photo-list__user-info">
    <div>{props.data.username}</div>
    <div className="photo-list__user-location">{location.city}, {location.country}</div>
    </div>
    </div>
    </div>
  )
};

export default PhotoListItem;
