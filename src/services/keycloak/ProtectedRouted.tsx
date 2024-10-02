import { useKeycloak } from '@react-keycloak/web';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = !!keycloak.authenticated;

  return isLoggedIn ? children : <Navigate to="/BulletinBoardClient" />;
};

export default PrivateRoute;
