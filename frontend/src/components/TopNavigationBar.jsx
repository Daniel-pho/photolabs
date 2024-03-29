import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const handleClick = () => {
    props.toggleTopic(null);
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={handleClick}>PhotoLabs</span>
      {<TopicList topics={props.topics} toggleTopic={props.toggleTopic}/>}
      {<FavBadge fave={props.fave} />}
    </div>
  )
}

export default TopNavigation;