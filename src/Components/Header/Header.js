import React from 'react';
import Logo from '../../images//Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" />
            <nav className='nav-item'>
                <a href="/Home">Home</a>
                <a href="/Oreder">Order</a>
                <a href="/About">About</a>
                <a href="/Login">Login</a>
            </nav>
        </div>
    );
};

export default Header;