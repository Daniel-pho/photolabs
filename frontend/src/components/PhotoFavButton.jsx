import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [Active, setActive] = useState(false)
  
  const handleClick = () => {
    setActive(prevActive => !prevActive)
    {props.toggleFave(props.id)}
  }

  return (
    
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={Active}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;