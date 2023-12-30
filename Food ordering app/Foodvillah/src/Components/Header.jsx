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
            <header className='bg-blue-400 h-20'>
                <div className='flex justify-between'>
                    <img className='h-14' src={logo} alt="Image is not able to see." />
                    <nav >
                        <ul className='flex flex-row'>
                            <li>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <p>Search</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                                <p>Offers</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-handshake-angle"></i>
                                <p>Help</p>
                            </li>
                            <li>
                                <i class="fa-regular fa-user"></i>
                                <p>Sign in</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-cart-shopping"></i>
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