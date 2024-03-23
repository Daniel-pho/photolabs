import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props.photo);

    const dualFunc= () => {
      props.toggleM();
      props.viewPhoto();
    }
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.toggleM}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
