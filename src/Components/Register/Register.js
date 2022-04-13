import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input type="text" name="name" id="name" placeholder='Your name' />
                <br />
                <input type="email" name="email" id="email" placeholder='Your email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;