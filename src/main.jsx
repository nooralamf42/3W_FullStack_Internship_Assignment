import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/appRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
