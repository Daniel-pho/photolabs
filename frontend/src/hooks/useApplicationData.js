import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useReducer } from "react";


  const initialState= {
    fave: [],
    modal: null,
    selected: [],
  }

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
      default:
        return state
  }
};

  export default useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFave = (photoKey) => {
    if (state.fave.includes(photoKey)) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: {id: photoKey}})
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: {id: photoKey}})
    }
  }
  
  const toggleModal = (modalpic) => {
    dispatch({type: modalpic ? ACTIONS.SELECT_PHOTO : ACTIONS.DESELECT_PHOTO, payload: display})
  }

  const toggleSelect = (id) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: id})
  }
  return {
    state,
    toggleModal,
    toggleFave,
    toggleSelect
  };

}


