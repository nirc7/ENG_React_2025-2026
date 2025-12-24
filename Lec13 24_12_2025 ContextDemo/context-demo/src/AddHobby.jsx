import { useContext, useState } from "react"
import { HobbyContext } from "./HobbiesContextProvider";

export default function AddHobby(props) {
  const { addHobby } = useContext(HobbyContext);

  const [name, setName] = useState();
  const [frequency, setFrequency] = useState();

  return (
    <div>AddHobby <br />

      name: <input type="text" onChange={(e) => setName(e.target.value)}
        value={name} placeholder="please eanter a name" /> <br />
      freq: <input type="text" onChange={(e) => setFrequency(e.target.value)}
        value={frequency} placeholder="please enter a freq" /> <br />
      <button onClick={() => {
        addHobby(name, frequency);
        setName('');
        setFrequency('');
      }} >add hobby</button>
    </div>
  )
}
