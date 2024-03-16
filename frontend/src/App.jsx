
import './App.css'
import { ScrollPics} from './components/ScrollPics'
import Footer from './components/footer'
import {  NavbarTop } from './components/Navbar'
import TodaysSpecial from './components/TodaySpecialComponents/TodaySpecial'
import Offers from './components/Offers/Offers'
import {Event} from './pages/Event'


function App() {
  return (
    <div>
      <div>
        <NavbarTop />
        <div className='flex justify-evenly mt-4'>
            <Offers/>
          <TodaysSpecial/>
        </div>
        <ScrollPics/>
        <NavbarTop/>
        {/* <ScrollPics/> */}
      <Event/>
      </div>
     <Footer/>
    </div>
  )
}

export default App
