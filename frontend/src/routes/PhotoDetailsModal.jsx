import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  
    const photofinder = function(id) {
      for (const photo of props.photos) {        
        if (photo.id = id) {
          return photo
        }
      }
    }

    const chosen = photofinder(props.photo[0])
    
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleM}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className='photo-details-modal__image'>
        <PhotoFavButton id={props.id} fave={props.fave} toggleFave={props.toggleFave}/>
        <PhotoList photos={props.photos} fave={props.fave} toggleFave={props.toggleFave}
     modal={props.modal} modalView={props.modalView} toggleM={props.toggleM}
     photo={props.photo} viewPhoto={props.viewPhoto}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
