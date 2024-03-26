import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";



const PhotoList = (props) => {
// console.log(props.photos, "THESE ARE THE PHOTOS FROM PHOTOLIST");

  
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
      modal={props.modal}
      modalView={props.modalView}
      toggleM={props.toggleM}
      setSelected={props.setSelected}
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
