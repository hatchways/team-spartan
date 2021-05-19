import { Switch, Route, Redirect } from 'react-router-dom';
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
      {/* 
        Should think about a middle component here instead of directing to login then dashboard
        I.e., a landing page for wrong urls
       */}
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </>
);

export default Routes;
