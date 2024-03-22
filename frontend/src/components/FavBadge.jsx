import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  

  const faveCheck = props.fave.length > 0
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={faveCheck} selected={faveCheck}/>
    </div>
  ) 
};

export default FavBadge;