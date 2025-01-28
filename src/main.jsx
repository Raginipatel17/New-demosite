import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import OurServices from './Pages/OurServices';
import Blog from './Pages/Blog';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/About';
import BlogDetails from './Componants/BlogDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
let route=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/our-services',
      element:<OurServices/>

    },
    {
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'/Contactus',
      element:<Contactus/>
    },
    {
      path:'/Aboutus',
      element:<Aboutus/>
    },
    {
      path:'blog/:id',
      element:<BlogDetails/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();