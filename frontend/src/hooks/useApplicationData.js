import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function useApplicationData() {

  const [state, setState] = useState({ modal: false, selected: "", fave: [] });
  // const [modal, setModal] = useState(false);
  // const [selected, setSelected] = useState("");
  // const [fave, setFave] = useState([]);
  
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


