import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.inti';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/google">Google</Link>
            <Link className='link' to="/product">Products</Link>
            <Link className='link' to="/orders">Orders</Link>
            <Link className='link' to="/register">Register</Link>
            <span style={{ color: "green", paddingRight: "10px" }}>{user?.displayName && user.displayName}</span>
            {
                user?.uid
                    ?
                    <button onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <Link className='link' to="/login">Login</Link>
            }
        </nav>
    );
};

export default Header;