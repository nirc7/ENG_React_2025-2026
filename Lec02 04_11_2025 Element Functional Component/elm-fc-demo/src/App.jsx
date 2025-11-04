import './App.css'
import  EHeader from "./Elements/EHeader";
import FCStudent from './Functional Components/FCStudent';


function App() {
  return (
    <div>
      {EHeader}      
      <div>Hello World! <br />
      </div>

      <FCStudent id="1" name={"avi"} grade={100.5}/>
      <FCStudent id="2" name="benny" grade={40}/>
      <FCStudent id="2" name="cakhrlue" grade={70}/>
    </div>
  )
}

export default App
