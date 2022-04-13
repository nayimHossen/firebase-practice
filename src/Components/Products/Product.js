import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Product = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Knock Knock ! Who is there</h2>
            <h5>{user ? user.displayName : "No One"}</h5>
        </div>
    );
};

export default Product;