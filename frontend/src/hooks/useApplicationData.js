import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function useApplicationData() {

  const [state, setState] = useState({ modal: null, selected: null, fave: [] });
  // const [modal, setModal] = useState(false);
  // const [selected, setSelected] = useState("");
  // const [fave, setFave] = useState([]);
  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DESELECT_PHOTO: 'DESELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {...state, fave:[action.payload, ...state.fave]};
  
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {...state, fave: state.fave.filter(photo => photo.id !== action.payload.id)};

      case ACTIONS.SET_PHOTO_DATA:
        return {...state, selected: action.payload};

      case ACTIONS.SELECT_PHOTO:
        return {...state, modal: action.payload};

      case ACTIONS.DESELECT_PHOTO:
        return {...state, modal: null};
      
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {...state}
  }
  const toggleFave = (photoKey) => {
    if (state.fave.includes(photoKey)) {
      setState(prevState => ({...prevState, fave:prevState.fave.filter(id => id !== photoKey)}))
    } else {
      setState(prevState => ({...prevState, fave: [...prevState.fave, photoKey]}))
    }
  }
  
  const toggleModal = (modalpic) => {
    setState(prevState => ({ ...prevState, modal: !prevState.modal }))
  }

  const toggleSelect = (id) => {
    setState(prevState => ({...prevState, selected:id}))
  }
  return {
    modal: state.modal,
    selected: state.selected,
    fave: state.fave,
    toggleModal,
    toggleFave,
    toggleSelect
  };

}

}
