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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

