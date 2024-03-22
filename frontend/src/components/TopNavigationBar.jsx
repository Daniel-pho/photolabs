import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  console.log(props, "PROPS FROM TOPN MNAVIGATION")
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {<TopicList topics={props.topics}/>}
      {<FavBadge/>}
    </div>
  )
}

export default TopNavigation;