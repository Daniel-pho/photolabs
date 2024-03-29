import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation


const App = () => {
  
  const {  state, toggleModal, toggleFave, setSelected, toggleSelect, toggleTopic} = useApplicationData();
 
  

  return (<div className="App">
  <HomeRoute photos={state.photoData} topics={state.topicData} 
  modalView={PhotoDetailsModal} modal={state.modal} toggleModal={toggleModal} 
   fave={state.fave} toggleFave={toggleFave} selected={state.selected} 
   setSelected={setSelected} toggleSelect={toggleSelect} toggleTopic={toggleTopic}/>


  {state.modal && <PhotoDetailsModal  toggleModal={toggleModal}  
  photos={state.photoData} fave={state.fave} toggleFave={toggleFave} 
  selected={state.selected} state={state}
  />}
</div>
  )
};

export default App;
