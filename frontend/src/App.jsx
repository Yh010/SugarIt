
import './App.css'
import { ScrollPics} from './components/ScrollPics'
import Footer from './components/footer'
import {  NavbarTop } from './components/Navbar'



function App() {
  return (
    <div>
      <div>
        <NavbarTop/>
        <ScrollPics/>
      </div>
     <Footer/>
    </div>
  )
}

export default App
