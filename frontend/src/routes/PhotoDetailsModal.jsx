import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  console.log(props.photos,"THESE ARE THE PHOTOS");
  
  // console.log(props.photo, "THIS IS THE CHOSEN ONE");
    const photofinder = function(id) {
      for (const photo of props.photos) {        
        if (photo.id = id) {
          return photo
        }
      }
    }
    // console.log(props.photo, "singular");
    const chosen = photofinder(props.photo)
    console.log(chosen,"CHOSEN");
    // console.log(props.photo)
    const chosenPics = chosen.similar_photos
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleM}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className='photo-details-modal__images'>
        <PhotoFavButton id={props.id} fave={props.fave} toggleFave={props.toggleFave}/>
        <img className="photo-details-modal__image" src={props.photo} alt="selected pic"/>
        {/* <PhotoList photos={chosenPics} fave={props.fave} toggleFave={props.toggleFave}
     modal={props.modal} modalView={props.modalView} toggleM={props.toggleM}
     photo={props.photo} viewPhoto={props.viewPhoto}/> */}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
