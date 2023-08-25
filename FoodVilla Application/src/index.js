import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/CSS/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from "../src/components/Profile"
import Cart from "../src/components/Cart"
import Authentication from "../src/components/Authentication"
import Error from "../src/components/Error"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/authentication",
    element: <Authentication />
  },
  {
    path: "/*",
    element: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter} />
);


reportWebVitals();
