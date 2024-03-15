import { useState } from 'react'

import './App.css'
import { ScrollPics} from './components/ScrollPics'
import {  NavbarTop } from './components/Navbar'
import {Event} from './pages/Event'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <NavbarTop/>
        {/* <ScrollPics/> */}
      <Event></Event>
      </div>
     
    </div>
  )
}

export default App
