import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();

    return (
        <nav>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/google">Google</Link>
            <Link className='link' to="/register">Register</Link>
            <span style={{ color: "green", paddingRight: "10px" }}>{user.displayName && user.displayName}</span>
            {
                user?.uid
                    ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link className='link' to="/login">Login</Link>
            }
        </nav>
    );
};

export default Header;