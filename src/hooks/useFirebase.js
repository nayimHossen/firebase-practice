import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import app from '../firebase.inti';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;