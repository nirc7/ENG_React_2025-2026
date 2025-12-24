import { useContext } from "react"
import { HobbyContext } from "./HobbiesContextProvider";
import HobbyItem from "./HobbyItem";

export default function HobbiesList(props) {
  const { hobbies } = useContext(HobbyContext);

  let hobbiesStr = hobbies.map(hob =>
    <HobbyItem key={hob.id} id={hob.id} name={hob.name} frequency={hob.frequency} />
  );

  return (
    <div>HobbiesList: <br />
      {hobbiesStr}
    </div>
  )
}
