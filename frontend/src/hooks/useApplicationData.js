import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useReducer} from "react";

const useApplicationData = () => {
  const initialState= {
    fave: [],
    modal: false,
    selected: null,
    photoData: [],
    topicData: [],
    topicId: null
  }

  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_SELECTED_PHOTO_DATA: 'SET_SELECTED_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DESELECT_PHOTO: 'DESELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_ID: 'SET_TOPIC_ID',
    REMOVE_TOPIC_ID: 'REMOVE_TOPIC_ID'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {...state, fave:[action.payload, ...state.fave]};
  
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {...state, fave: state.fave.filter(photo => action.payload !== photo)};

      case ACTIONS.SET_SELECTED_PHOTO_DATA:
        return {...state, selected: action.payload};

      case ACTIONS.TOGGLE_MODAL:
        return {...state, modal: !state.modal};

      case ACTIONS.DESELECT_PHOTO:
        return {...state, selected: []};

      case ACTIONS.SELECT_PHOTO:
        return {...state, selected: action.payload};
      
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {...state, }

      case ACTIONS.SET_PHOTO_DATA:
        return {...state, photoData: action.payload};

      case ACTIONS.SET_TOPIC_DATA:
        return {...state, topicData: action.payload};

      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return {...state, photoData: action.payload};

      case ACTIONS.SET_TOPIC_ID:
        return {...state, topicId: action.payload};

      case ACTIONS.REMOVE_TOPIC_ID:
        return{...state, topicId: action.payload}

      default:
        return state
  }
};

  
 const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      if(state.topicId === null)
      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        )
        .catch(error => console.log('Error', error));
    }, [state.topicId]);

    useEffect(() => {
      fetch('/api/topics')
      .then((response) => 
       response.json())
       .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
        )
        .catch(error => console.log('Error', error));
    }, [])
    
    useEffect(() => {
      if(state.topicId) {
        fetchPicByTopicId(state.topicId)
      }
    }, [state.topicId])

  const fetchPicByTopicId = (topic) => {
    fetch(`http://localhost:8001/api/topics/photos/${topic}`)
    .then((response) => response.json())
    .then((data) => 
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data})
    )
    .catch(error => console.log('Error', error));}
 

  const toggleFave = (photoKey) => {
    const isFave = state.fave.includes(photoKey)
    dispatch({type: isFave ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED, payload: photoKey})
  }
  
  const toggleModal = (modalpic) => {
    dispatch({type: ACTIONS.TOGGLE_MODAL})
  }

  const setSelected = (id) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: id})
  }
  const toggleSelect = (photo) => {
    dispatch({type: state.selected ? ACTIONS.DESELECT_PHOTO : ACTIONS.SET_PHOTO_DATA, selected: photo})
  }

  const toggleTopic = (topicId) => {
    dispatch({type: topicId ? ACTIONS.SET_TOPIC_ID : ACTIONS.REMOVE_TOPIC_ID, payload: topicId})
  }
  return {
    state,
    toggleModal,
    toggleFave,
    setSelected,
    toggleSelect,
    toggleTopic
  };

}

export default useApplicationData;