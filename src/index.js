import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import AdminHome from "./pages/AdminHome";
import AdminDashboard from './components/AdminDashboard';


const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/admin",
    element:<AdminHome/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/admin",
        element:<AdminDashboard/>
      }
    ]
  },
  {
    path:"/*",
    element: <ErrorPage/>,
    errorElement: <ErrorPage status="200" message="Error"/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
