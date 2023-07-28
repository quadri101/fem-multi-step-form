import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import YourInfo, {action as infoAction} from './components/MainContent/YourInfo/YourInfo.jsx'
import SelectPlan from './components/MainContent/SelectPlan/SelectPlan.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children:[
        {
          index: true,
          element: <YourInfo/>,
          action: infoAction,
        },{
          path: "selectplan",
          element: <SelectPlan/>,
        }
       
      ]
    }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
