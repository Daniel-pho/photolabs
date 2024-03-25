import React, { createContext } from "react";
import { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) => {
//Clean out fave 
 
  
  return (
    <div className="home-route">
    <TopNavigation topics={props.topics} fave={props.fave}/>
    <PhotoList photos={props.photos} fave={props.fave} toggleFave={props.toggleFave}
     modal={props.modal} modalView={props.modalView} toggleM={props.toggleM}
    />
  
    </div>

  )
}


export default HomeRoute;