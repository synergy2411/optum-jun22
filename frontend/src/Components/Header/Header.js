import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='navbar nav'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/login'>Login</NavLink></li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/expenses'>Expenses</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
