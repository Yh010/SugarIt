import { useState } from 'react'

import './App.css'
import { ScrollPics} from './components/Scrollbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <ScrollPics/>
      </div>
     
    </div>
  )
}

export default App
