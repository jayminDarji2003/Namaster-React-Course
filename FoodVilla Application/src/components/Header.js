import React, { useState } from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import App from '../App';
import Cart from './Cart';
import Profile from './Profile';
import Authentication from './Authentication';


function Header() {
    const [isLogedIn, setIsLogedIn] = useState(true);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="navItems">
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fa-solid fa-house home"></i>
                        </Link>
                    </li>

                    <li>
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping cartIcon"></i>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile">
                            <i className="fa-solid fa-user profileIcon" ></i>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Authentication">
                            {
                                (isLogedIn) ?
                                    <i className="fa-solid fa-share-from-square authenticationIcon"></i> :
                                    <i className="fa-solid fa-reply-all authenticationIcon"></i>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header
