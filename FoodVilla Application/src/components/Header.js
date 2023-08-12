import React from 'react'
import logo from './logo.png'
import '../index.css'

function Header() {
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
                </ul>
            </div>
        </header>
    )
}

export default Header
