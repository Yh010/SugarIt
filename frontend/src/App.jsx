import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavbarTop from './components/Navbar'
import Footer from './components/footer'
import Landing from './components/Landing'
import  Menu  from './pages/Menu/Menu'
import AboutUs from './pages/AboutUs/AboutUs'
import './App.css'
import Books from './pages/Books/Books'
import Event from './pages/Event'
import Forum from './pages/Forum/Forum'
import PaymentCheckout from './pages/Payments/Checkout'


function App() {
  return (
    <>
    <Router>
      <header>
        <NavbarTop />
      </header>
      <main>
        <Routes>
        <Route path='/' element = { <Landing/> }/>
        <Route path='/menu' element = { <Menu/> }/>
        <Route path='/AboutUs' element = { <AboutUs/> }/>
        <Route path='/books' element = { <Books /> }/>
        <Route path='/events' element = { <Event/> }/>
        <Route path='/forum' element={<Forum />} />
        <Route path='/checkout' element = { <PaymentCheckout/>}/>
        
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
    
  )
}

export default App
