import { Outlet } from 'react-router-dom';
import './Assets/CSS/App.css';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

import { Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}

    </>
  )
}

export default App;
