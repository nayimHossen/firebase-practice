import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase();

    return (
        <div>
            <h1>Please Login</h1>
            <div>
                <button onClick={signInWithGoogle}>Login Google</button>
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