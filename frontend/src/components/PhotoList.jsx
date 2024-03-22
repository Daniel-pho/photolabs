import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {

  const photos = props.photos.map((photo) => {
  
    return (
      <PhotoListItem
      key={photo.id}
      id={photo.id}
      imageSource={photo.urls.full}
      profile={photo.user.profile}
      username={photo.user.username}
      location={photo.location}
      fave={props.fave}
      toggleFave={props.toggleFave}
      />
  
    )
  })
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
