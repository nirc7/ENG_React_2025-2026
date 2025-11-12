import './App.css'
import CCCar from './ClassComps/CCCar';
import EHeader from "./Elements/EHeader";
import FCStudent from './Functional Components/FCStudent';


function App() {
  return (
    <div>
      {EHeader}
      <div>Hello World! <br />
      </div>

      <CCCar model="BMW" speed={200} /> <br />
      <CCCar model="Porsche" speed={300} />

      <FCStudent id="1" name={"avi"} grade={100.5} />
      <FCStudent id="2" name="benny" grade={40 * 5} />
      <FCStudent id="2" name="cakhrlue" grade={70} />
    </div>
  )
}

export default App
