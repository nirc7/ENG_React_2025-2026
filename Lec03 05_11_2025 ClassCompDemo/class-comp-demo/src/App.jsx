import './App.css'
import CCCar from './Class Comps/CCCar';
import EHeader from './Elements/EHeader';
import FCStudent from './Functional Comps/FCStudent';


function App() {

  return (
    <div>
      {EHeader}
      <h1>Vite + React</h1>
      <div className="card">
        App <br /> <br />
        <CCCar model={"BMW"} speed={200} /> <br />
        <CCCar model={"Porsche"} speed={300} /> <br />
        
        <FCStudent id={1} name="avi" grade={100} />
        <FCStudent id={2} name="benny" grade={40} />
        <FCStudent id={3} name="dora" grade={99} />
      </div>
    </div>
  )
}

export default App;
