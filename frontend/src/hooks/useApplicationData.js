import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function useApplicationData = () = {

  const [state, setState] = useState({ modal: false, selected: "", fave: [] });
  // const [modal, setModal] = useState(false);
  // const [selected, setSelected] = useState("");
  // const [fave, setFave] = useState([]);
  
  return {
    modal,
    setModal,
    selected,
    setSelected,
    fave,
    setFave
  };

}


