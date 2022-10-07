import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images//Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" />
            <nav className='nav-item'>
                <Link to="/home">Home</Link>
                <Link to="/order">Order</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;