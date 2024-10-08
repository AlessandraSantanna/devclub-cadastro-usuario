import React from 'react'
import ReactDOM from 'react-dom/client'
/*import App from './App.jsx'*/
import { GlobalStyles } from './assets/styles/GlobalStyles.js'
import { Router, RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
     <RouterProvider router={router}/>
    </React.StrictMode>,
)
