import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = (props) => {
    // console.log(props, "these are the items");
  /* Insert React */
  const location = props.location
  const handleClick = () => {
    props.toggleM()
    
  }
  return (
    <div className="photo-list__item" >
    <PhotoFavButton id={props.id} fave={props.fave} toggleFave={props.toggleFave}/>
    <img className="photo-list__image" src={props.imageSource} alt="image" onClick={props.toggleM}/>
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
