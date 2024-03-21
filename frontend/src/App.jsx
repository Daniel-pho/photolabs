import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation


const App = () => {
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

  
  return (
    <div className="App">
      {/* {photos.map((photo, index) => (
        <PhotoListItem key={index} data={photo} />
      ))} */}
        <PhotoList />
    </div>
  );
};

export default App;
