import React, { createContext } from "react";
import { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";

const HomeRoute = (props) => {
//Clean out fave 
 
  
  return (
    <div className="home-route">
    <TopNavigation topics={props.topics} fave={props.fave} toggleTopic={props.toggleTopic}/>
    <PhotoList photos={props.photos} fave={props.fave} toggleFave={props.toggleFave}
     modal={props.modal} modalView={props.modalView} toggleModal={props.toggleModal} setSelected={props.setSelected} toggleSelect={props.toggleSelect}
    id={photos.id}/>
  
    </div>

  )
}


export default HomeRoute;