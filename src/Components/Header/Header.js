import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link className='link' to="/">Google</Link>
        </nav>
    );
};

export default Header;