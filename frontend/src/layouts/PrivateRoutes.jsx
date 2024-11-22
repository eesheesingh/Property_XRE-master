import { useAtom } from 'jotai';
import { authAtom } from '../store/auth';

const PrivateRoutes = ({ children }) => {
    const [auth] = useAtom(authAtom);
    console.log(auth);

    const isAuthenticated = () => {
        const token = auth?.access_token;
        return token ? true : false;
    };

    // Temporarily disabling the redirect to "/login" for unauthenticated users
    // return isAuthenticated() ? children : <Navigate to="/login" />;
    return children;
};

export default PrivateRoutes;
