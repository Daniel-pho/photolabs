import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function useApplicationData = () = {


  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");
  const [fave, setFave] = useState([]);
  
  return {
    modal,
    setModal,
    selected,
    setSelected,
    fave,
    setFave
  };

}


export default useApplicationData;