import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../context/useAuthContext';

export const ProtectedRoute = ({ ...routeProps }: RouteProps): JSX.Element => {
  const { loggedInUser } = useAuth();

  if (loggedInUser) return <Route {...routeProps} />;

  return <Redirect to={{ pathname: '/unauthorized' }} />;
};
