import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Aboutme from './routes/aboutme';
import Portfolio from './routes/portfolio';
import Contact from './routes/contact';
import Resume from './routes/resume';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Aboutme/>
      },
      {
        path: "portfolio",
        element: <Portfolio/>
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "resume",
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} /></React.StrictMode>,
)
