
import './App.css'
import { ScrollPics} from './components/ScrollPics'
import Footer from './components/footer'
import {  NavbarTop } from './components/Navbar'
import TodaysSpecial from './components/TodaySpecialComponents/TodaySpecial'
import Offers from './components/Offers/Offers'
import Event from './pages/Event'


function App() {
  return (
    <div>
      <div style={{padding:0,margin:0 , position:'relative'}}>
         
        {/* <NavbarTop/> */}
        <ScrollPics/>
        <NavbarTop/>
       </div>
        <div className='flex justify-evenly mt-4'>
            <Offers/>
          <TodaysSpecial/>
        </div>
        
     <Footer/>
    </div>
  )
}

export default App
