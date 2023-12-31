import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./AuthProvider/AuthProvider";
import SingleToyDetails from "./Pages/Home/ShopByCategory/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import AddAToy from "./Pages/AddAToy/AddAToy";
import AllToys from "./Pages/AllToys/AllToys";
import MyToys from "./Pages/MyToys/MyToys";
import UpdateMyToys from "./Pages/MyToys/UpdateMyToys";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/toy/:id",
        element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>
      },
      {
        path:"/addToy",
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:"/allToys",
        element:<AllToys></AllToys>
      },{
        path:"/myToys",
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },{
        path:"/update/:id",
        element:<UpdateMyToys></UpdateMyToys>,
      },{
        path:"/blog",
        element:<Blog></Blog>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#FFFAEC]">
  <div className="">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
    ,
  </div>
  </div>
);
