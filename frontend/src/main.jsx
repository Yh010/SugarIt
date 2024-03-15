import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Navbar } from '@material-tailwind/react'
import Menu from './pages/Menu/Menu.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Books from './pages/Books/Books.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>
  },
  {
    path: "/books",
    element: <Books/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Navbar/> */}
      <App />
       <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
