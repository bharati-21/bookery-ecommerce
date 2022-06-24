import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "contexts/";

const ProtectedRoutes = () => {
	const {
		authState: { isAuth },
	} = useAuth();

	const location = useLocation();

	return isAuth ? (
		<Outlet />
	) : (
		<Navigate to="/login" replace state={{ from: location?.pathname }} />
	);
};

export { ProtectedRoutes };
