import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'; import app from '../../firebase.inti';

const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div>
            <h1>Please Login</h1>
            <div>
                <button onClick={() => signInWithGoogle()}>Login Google</button>
            </div>
            <form>
                <input type="email" name="email" id="email" placeholder='Your email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Login;