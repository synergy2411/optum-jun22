import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

const Header = () => {
    const histroy = useHistory()
    const context = useContext(AuthContext);

    const logoutHandler = () => {
        localStorage.clear()
        context.setIsLoggedIn(false)
        histroy.replace("/login")
    }
    return (
        <header>
            <nav className='navbar nav'>
                <ul className='nav nav-tabs'>
                    { !context.isLoggedIn && <li className='nav-item'>
                        <NavLink className='nav-link' to='/login'>Login</NavLink></li>}
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/expenses'>Expenses</NavLink></li>
                   { context.isLoggedIn && <li className='nav-item'>
                        <button className='btn btn-danger btn-sm' onClick={logoutHandler}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
