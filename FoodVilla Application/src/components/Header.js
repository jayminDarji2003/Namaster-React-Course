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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
