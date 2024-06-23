import { useState } from 'react'

export const useToggle = (initialVal = false) => {
  const [ state, setState ] = useState("");

  const toggle = () => {
    setState((prev)=>!prev)
  }

  //returning an array
  // return [state, toggle]

  //returning an object
  return { state, toggle }
}