import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import ModalPhotoList from 'components/ModalPhotoList';



const PhotoDetailsModal = (props) => {
  // console.log(props.photos,"THESE ARE THE PHOTOS");

  const chosenPhoto = () => {
    for (const pic of props.photos) {
      if(pic.id === props.selected) {
        return pic
      }
    }
  }
    const faveThisPic=props.toggleFave
    const chosenPic = chosenPhoto()
    console.log(chosenPic);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleM}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
      <PhotoFavButton id={chosenPic.id} fave={props.fave} toggleFave={props.toggleFave}/>
        <img className='photo-details-modal__image' src={chosenPic.urls.full} alt={chosenPic.id + " picture"}/>
    
      <div>
        <img className='photo-details-modal__photographer-profile' src={chosenPic.user.profile}/>
        <div className='photo-details-modal__photographer-info'>{chosenPic.user.username}</div>
        <div className='photo-details-modal__photographer-location'>{chosenPic.location.city}, {chosenPic.location.country}</div>
      </div>
      <h2 className='photo-details-modal__header'>Similar Photos</h2>
      </div>
      
      <div className='photo-details-modal__image'><PhotoList photos={props.photos} fave={props.fave} toggleFave={props.toggleFave}/>
      </div>
      
    </div>
  )
};

export default PhotoDetailsModal;
