import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Menu from './pages/Menu/Menu.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Books from './pages/Books/Books.jsx';
import Event from './pages/Event.jsx';

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
  },{
    path: "/events",
    element: <Event/>
  }
]);
=======

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
