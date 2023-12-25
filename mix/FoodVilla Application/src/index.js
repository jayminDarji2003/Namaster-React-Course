import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Authentication from './components/Authentication';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Loader from './components/Loader';

// chunking the code, lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

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

          <Route path="/instamart" element={
            <Suspense fallback={<Loader />}>
              <Instamart />
            </Suspense>} />

          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode >,
);

