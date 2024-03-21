import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  
  const location = props.sampleDataForPhotoListItem.location
  return (
    <div>
    <img src={props.sampleDataForPhotoListItem.imageSource} alt="image" />
    <img src={props.sampleDataForPhotoListItem.profile} alt="profile" />
    <p>{props.sampleDataForPhotoListItem.username}</p>
    <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
