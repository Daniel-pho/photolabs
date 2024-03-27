import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function useApplicationData() {

  const [state, setState] = useState({ modal: false, selected: "", fave: [] });
  // const [modal, setModal] = useState(false);
  // const [selected, setSelected] = useState("");
  // const [fave, setFave] = useState([]);
  
  const toggleFave = (photoKey) => {
    if (state.fave.includes(photoKey)) {
      setState(prevFave => prevFave.filter(id => id !== photoKey))
    } else {
      setState(prevFave => [...prevFave, photoKey])
    }
  }
  
  const toggleModal = () => {
    setState(prevstate => !prevstate)
  }

  return {
    modal,
    setModal,
    selected,
    setSelected,
    fave,
    setFave,
    toggleModal,
    toggleFave
  };

}


