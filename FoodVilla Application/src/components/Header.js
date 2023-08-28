import React, { useState } from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom';

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
                        <Link to="/" className='linkContainer'>
                            <p>HOME</p>
                            <i className="fa-solid fa-house home"></i>
                        </Link>
                    </li>

                    <li>
                        <Link to="/cart" className='linkContainer'>
                            <p> CART</p>
                            <i className="fa-solid fa-cart-shopping cartIcon"></i>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile" className='linkContainer'>
                            <p>PROFILE</p>
                            <i className="fa-solid fa-user profileIcon" ></i>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Authentication" className='linkContainer'>

                            {
                                (isLogedIn) ? <p>Log Out</p> : <p>Log Out</p>
                            }

                            {
                                (isLogedIn) ?
                                    <i className="fa-solid fa-share-from-square authenticationIcon"></i>
                                    :
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
