import React, { useState } from 'react'
import logo from './logo.png'
import '../index.css'

const logedInUser = () => {
    // API call to check authenticate user
    return true;
}


function Header() {

    const [isLogedIn, setIsLogedIn] = useState(true);

    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Logo" />
                </a>
            </div>

            <div className="navItems">
                <ul>
                    <li>
                        <a href="/">
                            <i className="fa-solid fa-cart-shopping cartIcon"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <i className="fa-solid fa-user profileIcon" ></i>
                        </a>
                    </li>

                    {
                        (isLogedIn) ?
                            <li>
                                <button className='login_logout_btn' onClick={() => setIsLogedIn(false)}>Log Out</button>
                            </li> :
                            <li>
                                <button className='login_logout_btn' onClick={() => setIsLogedIn(true)}> Log In</button>
                            </li>
                    }

                    {/* <li>
                        <button className='login_logout_btn'>Log In</button>
                    </li> */}
                </ul>
            </div>
        </header >
    )
}

export default Header
