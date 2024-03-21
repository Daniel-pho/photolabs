import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const location = props.location

  return (
    <div className="photo-list__item">
    <PhotoFavButton />
    <img className="photo-list__image" src={props.imageSource} alt="image" />
    <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={props.profile} alt="profile" />
    <div className="photo-list__user-info">
    <div>{props.username}</div>
    <div className="photo-list__user-location">{location.city}, {location.country}</div>
    </div>
    </div>
    </div>
  )
};

export default PhotoListItem;
