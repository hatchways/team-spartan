import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';

const Routes = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </>
);

export default Routes;
