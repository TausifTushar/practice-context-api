import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Components/Context/Context.jsx'
import router from './Router/Router.jsx'
import {
  
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    {/* <App /> */}
    </Context>
 
  </React.StrictMode>,
)
