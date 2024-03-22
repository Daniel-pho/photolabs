import React, { createContext } from "react";
import { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {

  const [fave, setFave] = useState([]);
  
  const toggleFave = (photoKey) => {
    if (fave.includes(photoKey)) {
      setFave(prevFave => prevFave.filter(id => id !== photoKey))
    } else {
      setFave(prevFave => [...prevFave, photoKey])
    }
  }
  
  return (
    <div className="home-route">
    <TopNavigation topics={props.topics} fave={fave}/>
    <PhotoList photos={props.photos} fave={fave} toggleFave={toggleFave}/>
    </div>

  )
}


export default HomeRoute;