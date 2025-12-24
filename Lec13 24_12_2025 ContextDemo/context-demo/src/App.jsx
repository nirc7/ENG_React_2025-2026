
import AddHobby from './AddHobby';
import './App.css'

import HobbiesContextProvider from './HobbiesContextProvider';
import HobbiesList from './HobbiesList';

function App() {

  return (
    <HobbiesContextProvider>
      <AddHobby />
      <HobbiesList />
    </HobbiesContextProvider>
  )
}

export default App
