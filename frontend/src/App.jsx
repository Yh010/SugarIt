import { useState } from 'react'

import './App.css'
import { ScrollPics} from './components/ScrollPics'
import {  NavbarTop } from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <NavbarTop/>
        <ScrollPics/>
      </div>
     
    </div>
  )
}

export default App
