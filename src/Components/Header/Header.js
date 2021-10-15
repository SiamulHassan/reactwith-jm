import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header_logo'>
            <img src={logo} alt="fav-logo" />
            <nav>
                <a href="/Shop"> Shop </a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory here">Manage Inventory here</a>
            </nav>
        </div >
    );
};

export default Header;