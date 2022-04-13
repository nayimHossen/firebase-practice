import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.inti';

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return
};

export default RequireAuth;