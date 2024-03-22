import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
// Note: Rendering a single component to build components in isolation


const App = () => {
  return (<div className="App">
  <HomeRoute photos={photos} topics={topics}/>
</div>
  )
      
  // const photos = new Array(3).fill({
  //   id: "1",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //   },
  //   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //   username: "Joe Example",
  //   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  // })

  
  // return (
  //   <div className="App">
  //     {/* {photos.map((photo, index) => (
  //       <PhotoListItem key={index} data={photo} />
  //     ))} */}
  //       {/* <PhotoList /> */}
       
  //   </div>
  // );
};

export default App;
