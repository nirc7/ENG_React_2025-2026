import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CCPersons from './ClassComps/CCPersons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* CCPErson cc= new CCPern(); cc.Redner(); */}
      <CCPersons />
    </div>
  )
}

export default App
