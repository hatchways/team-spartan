import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import ProtectedRoute from './protectedRoute';
import Unauthorized from './unauthorized';

const Routes = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/unauthorized" component={Unauthorized} />
      {/* Need to re-access the way this redirec occurs as it happens with useAuth's useEffect (check useAuth.tsx) */}
      {/* <Route path="*">
        <Redirect to="/login" />
      </Route> */}
    </Switch>
  </>
);

export default Routes;
