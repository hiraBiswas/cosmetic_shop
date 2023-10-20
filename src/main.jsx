import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from '../src/Components/ErrorPage/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import MyCart from './Components/myCart/myCart'
import AddProduct from './Components/AddProduct/AddProduct'
import BrandProduct from './Components/BrandProduct/BrandProduct'
import UpdateProduct from './Components/UpdateProduct/UpdateProduct'
import Details from './Components/Details/Details'
import AuthProvider from './Components/Providers/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/brand.json')
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/brand/:brand_name",
        element: <BrandProduct></BrandProduct>,
        loader: () => fetch('http://localhost:5200/product')
      },
      {
        path: "/brand/:brand_name/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5200/product/${params.id}`)
      } ,

      {
        path: "/brand/:brand_name/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5200/product/${params.id}`)
      }
      ,

      {
        path: "/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)