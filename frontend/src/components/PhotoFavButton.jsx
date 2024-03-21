import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [Active, setActive] = useState('Inactive')
  const switchLike = () => {
    setActive(Active === 'Active' ? 'Inactive' : 'Active')
  }
  const handleClick = () => {
    switchLike()
    console.log("icon clicked!")
  }
  return (
    
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={Active === 'Active'}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;