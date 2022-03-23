import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'contexts/';

const ProtectedRoutes = () => {
    const { authState: { isAuth } } = useAuth();
    return (isAuth ? <Outlet /> : <Navigate to="/login" />)
}

export {ProtectedRoutes};