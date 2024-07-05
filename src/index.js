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
import AdminStudent from "./components/AdminStudent";
import AdminTeacher from "./components/AdminTeacher";
import AdminSubject from "./components/AdminSubject";
import AdminClass from "./components/AdminClass";
import AdminAttendance from "./components/AdminAttendance";
import AdminUser from "./components/AdminUser";
import { StudentProvider } from './Context/studentContect';
import ViewStudent from "./components/view/ViewData"

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
        path:"",
        element:<AdminDashboard/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"student",
        element:<AdminStudent/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:"student/:id",
        element:<ViewStudent/>,
        errorElement:<ErrorPage/>
      },
      
      {
        path:"teacher",
        element:<AdminTeacher/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"subject",
        element:<AdminSubject/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:"class",
        element:<AdminClass/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"attendance",
        element:<AdminAttendance/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"user",
        element:<AdminUser/>,
        errorElement:<ErrorPage/>
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
    <StudentProvider>
      <RouterProvider router={router}/>
    </StudentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
