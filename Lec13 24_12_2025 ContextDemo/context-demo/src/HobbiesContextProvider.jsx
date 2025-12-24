import { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';


export const HobbyContext = createContext();

export default function HobbiesContextProvider(props) {
  const [hobbies, setHobbies] = useState([
    { id: 1, name: 'play', frequency: 3 }, { id: 2, name: 'swim', frequency: 2 }
  ]);

  const addHobby = (name, frequency) => {
    let newHobby = { id: uuidv4(), name, frequency };
    setHobbies([...hobbies, newHobby]);
  }

  const removeHobby = (id) => {
    let newHobbies = hobbies.filter(hob => hob.id !== id);
    setHobbies(newHobbies);
  }

  return (
    <HobbyContext.Provider value={{ hobbies, addHobby, removeHobby }}>
      {props.children}
    </HobbyContext.Provider>
  )
}
