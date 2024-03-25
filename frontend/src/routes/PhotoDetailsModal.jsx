import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import ModalPhotoList from 'components/ModalPhotoList';

const PhotoDetailsModal = (props) => {
  console.log(props.photos,"THESE ARE THE PHOTOS");
  
    
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleM}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div><PhotoList photos={props.photos} fave={props.fave} toggleFave={props.toggleFave}/>
      </div>
      
    </div>
  )
};

export default PhotoDetailsModal;
