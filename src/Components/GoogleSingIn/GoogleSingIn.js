import React from 'react';
import app from '../../firebase.inti';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);


const GoogleSingIn = () => {
    const provider = new GoogleAuthProvider();

    const handleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div>
            <button onClick={handleSingIn}>Google Sing In</button>
        </div>
    );
};

export default GoogleSingIn;