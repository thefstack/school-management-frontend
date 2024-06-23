import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './src/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './src/ErrorPage';
import AdminDashboard from './src/AdminDashboard';
import AdminHome from './components/AdminHome';


const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/admin",
    element:<AdminDashboard/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/admin",
        element:<AdminHome/>
      },
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
