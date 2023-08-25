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
                <Link to={App}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="navItems">
                <ul>
                    <li>
                        <Link to={App}>
                            <i class="fa-solid fa-house home"></i>
                        </Link>
                    </li>

                    <li>
                        <Link to={Cart}>
                            <i className="fa-solid fa-cart-shopping cartIcon"></i>
                        </Link>
                    </li>

                    <li>
                        <Link to={Profile}>
                            <i className="fa-solid fa-user profileIcon" ></i>
                        </Link>
                    </li>

                    <li>
                        <Link to={Authentication}>
                            {
                                (isLogedIn) ?
                                    <i class="fa-solid fa-share-from-square authenticationIcon"></i> :
                                    <i class="fa-solid fa-reply-all authenticationIcon"></i>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header
