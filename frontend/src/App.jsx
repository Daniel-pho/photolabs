import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation


const App = () => {
  // console.log(photos, "original pics");
  const { modal, setModal, selected, setSelected, fave, setFave, toggleFave, toggleModal, toggleSelect } = useApplicationData();

  

  return (<div className="App">
  <HomeRoute photos={photos} topics={topics} 
  modalView={PhotoDetailsModal} modal={modal} toggleModal={toggleModal} 
   fave={fave} toggleFave={toggleFave} selected={selected} setSelected={setSelected} toggleSelect={toggleSelect}/>
  {modal && <PhotoDetailsModal  toggleModal={toggleModal}  photos={photos}
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
