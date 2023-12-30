import React from 'react';
import logo from "/logo.png";

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
                <div className='flex justify-between items-center h-20 ml-36 mr-36 '>
                    <img className='h-14 cursor-pointer hover:h-16' src={logo} alt="Image is not able to see." />
                    <nav >
                        <ul className='flex flex-row gap-8'>
                            <li className='flex items-center gap-1 font-bold text-xl hover:text-orange-500 cursor-pointer'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <p>Search</p>
                            </li>
                            <li className='flex items-center gap-1 font-bold text-xl hover:text-orange-500 cursor-pointer'>
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                                <p>Offers</p>
                            </li>
                            <li className='flex items-center gap-1 font-bold text-xl hover:text-orange-500 cursor-pointer'>
                                <i className="fa-solid fa-handshake-angle"></i>
                                <p>Help</p>
                            </li>
                            <li className='flex items-center gap-1 font-bold text-xl hover:text-orange-500 cursor-pointer'>
                                <i className="fa-regular fa-user"></i>
                                <p>Sign in</p>
                            </li>
                            <li className='flex items-center gap-1 font-bold text-xl hover:text-orange-500 cursor-pointer'>
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