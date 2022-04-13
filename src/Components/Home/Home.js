import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.inti';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Home page</h1>
            <p>Current user is: {user ? user.displayName : "No Body"}</p>
        </div>
    );
};

export default Home;