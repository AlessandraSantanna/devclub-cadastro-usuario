import { createBrowserRouter } from "react-router-dom"
/*import App from './App.jsx'*/

import Home from "./App";
import ListUsers from "./pages/ListUsers/index.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/lista-de-usuarios',
        element:<ListUsers/>

    }
])

export default router