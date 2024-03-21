import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  /* Insert React */
  
  const location = sampleDataForPhotoListItem.location

  return (
    <div className="photo-list__item">
    <img className="photo-list__image" src={sampleDataForPhotoListItem.imageSource} alt="image" />
    <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.profile} alt="profile" />
    <p className="photo-list__user-info">{sampleDataForPhotoListItem.username}</p>
    <p className="photo-list__user-location">{location.city}, {location.country}</p>
    </div>
    </div>
  )
};

export default PhotoListItem;
