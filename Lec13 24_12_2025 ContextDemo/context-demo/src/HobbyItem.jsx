import { useContext } from "react"
import { HobbyContext } from "./HobbiesContextProvider";

export default function HobbyItem({ id, name, frequency }) {
  const { removeHobby } = useContext(HobbyContext);

  return (
    <div>id={id} name={name} freq={frequency}
      <span style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => removeHobby(id)}
      >X</span>
    </div>
  )
}
