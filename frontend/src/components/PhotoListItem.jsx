import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = (props) => {
    
  /* Insert React */
  
  const location = props.location
  const handleClick = (event) => {
   
    props.toggleModal(props.id)
    props.setSelected(props.id)
  }
  return (
    <div className="photo-list__item" >
    <PhotoFavButton id={props.id} fave={props.fave} toggleFave={props.toggleFave}/>
    <img className="photo-list__image" src={props.imageSource} alt="image" onClick={handleClick}/>
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
