// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './Assets/CSS/App.css';
// import App from './App';
// import Profile from "../src/components/Profile"
// import Cart from "../src/components/Cart"
// import Authentication from "../src/components/Authentication"
// import Error from "../src/components/Error"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Body from './components/Body';
// import RestaurantMenu from './components/RestaurantMenu';
// import RestaurantFoodMenu from './components/RestaurantFoodMenu';


// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />
//       },
//       {
//         path: "/profile",
//         element: <Profile />
//       },
//       {
//         path: "/cart",
//         element: <Cart />
//       },
//       {
//         path: "/authentication",
//         element: <Authentication />
//       },
//       {
//         path: "/restaurant/:resId",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/food",
//         element: <RestaurantFoodMenu />
//       }
//     ]
//   },

// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* //   <App /> */}
//     <RouterProvider router={appRouter} />
//   </React.StrictMode>
// );








// import React from 'react';
// import ReactDOM from 'react-dom';
// import './Assets/CSS/App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
// import Profile from './components/Profile';
// import Cart from './components/Cart';
// import Authentication from './components/Authentication';
// import Error from './components/Error';
// import Body from './components/Body';
// import RestaurantMenu from './components/RestaurantMenu';
// import RestaurantFoodMenu from './components/RestaurantFoodMenu';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<Body />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/authentication" element={<Authentication />} />
//           <Route path="/restaurant/:resId" element={<RestaurantMenu />} >
//             <Route index element={<RestaurantFoodMenu />} />
//           </Route>
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/CSS/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Authentication from './components/Authentication';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import RestaurantFoodMenu from './components/RestaurantFoodMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Body />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="/restaurant/:resId/food" element={<RestaurantFoodMenu />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

