import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import './EmailPassword';
import app from '../../firebase.inti';

const auth = getAuth(app);

const EmailPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const pa = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (pa.test(password) && em.test(email)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        } else {
            setError('password and email should validation')
            return;
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleEmail} type="email" placeholder="Email" required />
                <br />
                <input onBlur={handlePassword} type="password" placeholder='Password' required />
                <br />
                <p>{error}</p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default EmailPassword;