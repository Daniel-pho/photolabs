import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  /* Insert React */
  
  const location = sampleDataForPhotoListItem.location

  return (
    <div className="photo-list__item">
    <img src={sampleDataForPhotoListItem.imageSource} alt="image" />
    <img src={sampleDataForPhotoListItem.profile} alt="profile" />
    <p>{sampleDataForPhotoListItem.username}</p>
    <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
