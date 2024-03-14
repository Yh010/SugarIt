
import './App.css'
import { ScrollPics} from './components/ScrollPics'
import Footer from './components/footer'
import {  NavbarTop } from './components/Navbar'
import TodaysSpecial from './components/TodaySpecial'


function App() {
  return (
    <div>
      <div>
        <NavbarTop />
        <TodaysSpecial/>
        <ScrollPics/>
      </div>
     <Footer/>
    </div>
  )
}

export default App
