import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import WidthCheck from './WidthCheck';
import HomePage from "@/pages/HomePage"
import ReservePage from "@/pages/ReservePage"


const router = createBrowserRouter([
  {
    path: '/home',
    element: <WidthCheck 
              children={<HomePage></HomePage>}
            />
  },
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: '/reserve',
    element: <WidthCheck 
              children={<ReservePage></ReservePage>}
            />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
