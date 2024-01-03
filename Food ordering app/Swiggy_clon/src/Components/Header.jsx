import React from 'react';
import logo from "/logo.png";
import { Link } from 'react-router-dom';

/*
    Header component structure :-

    Logo (left side)
    Nav links (right side)
        - Search
        - Offers
        - Help
        - sigh in
        - Cart
*/

function Header() {
    return (
        <>
            <header className=' h-20 shadow-md'>
                <div className='flex justify-between items-center h-20 ml-40 mr-36 '>
                    <Link to='/' >
                        <img className='h-12 cursor-pointer hover:scale-105' src={logo} alt="Image is not able to see." />
                    </Link>
                    <nav >
                        <ul className='flex flex-row gap-16 text-gray-600'>
                            <li className='flex items-center gap-2 font-semibold text-md hover:text-orange-500 cursor-pointer'>
                                <Link to='/search' className='flex items-center gap-2'>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <p>Search</p>
                                </Link>
                            </li>
                            <li className='flex items-center gap-2 font-semibold text-md hover:text-orange-500 cursor-pointer'>
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                                <p>Offers</p>
                            </li>
                            <li className='flex items-center gap-2 font-semibold text-md hover:text-orange-500 cursor-pointer'>
                                <i className="fa-solid fa-handshake-angle"></i>
                                <p>Help</p>
                            </li>
                            <li className='flex items-center gap-2 font-semibold text-md hover:text-orange-500 cursor-pointer'>
                                <i className="fa-regular fa-user"></i>
                                <p>Sign in</p>
                            </li>
                            <li className='flex items-center gap-2 font-semibold text-md hover:text-orange-500 cursor-pointer'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <p>Cart</p>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;