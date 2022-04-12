import React, { useState } from 'react';
import app from '../../firebase.inti';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import './GoogleSingIn.css';

const auth = getAuth(app);


const GoogleSingIn = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    const handleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setUser({});
            })
    }

    return (
        <div>
            {user.email ?
                <button onClick={handleSignOut}>Sing out</button>
                :
                <button onClick={handleSingIn}>Google Sing In</button>}

            <div className='user-cart'>
                <img src={user.photoURL} alt="" />
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default GoogleSingIn;