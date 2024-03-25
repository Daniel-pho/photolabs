import React from 'react';
import { useState } from 'react';
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
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation


const App = () => {
  // console.log(photos, "original pics");
  const [modal, setModal] = useState(false)
  const [selected, setSelected] = useState("")
  const [fave, setFave] = useState([]);
  
  const toggleFave = (photoKey) => {
    if (fave.includes(photoKey)) {
      setFave(prevFave => prevFave.filter(id => id !== photoKey))
    } else {
      setFave(prevFave => [...prevFave, photoKey])
    }
  }
  
  
  
  const toggleModal = () => {
    setModal(prevstate => !prevstate)
  }


  return (<div className="App">
  <HomeRoute photos={photos} topics={topics} 
  modalView={PhotoDetailsModal} modal={modal} toggleM={toggleModal} 
   fave={fave} toggleFave={toggleFave} selected={selected} setSelected={setSelected}/>
  {modal && <PhotoDetailsModal  toggleM={toggleModal}  photos={photos}
  fave={fave} toggleFave={toggleFave} selected={selected}
  />}
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
