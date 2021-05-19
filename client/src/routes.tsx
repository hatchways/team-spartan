import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Signup, Dashboard, Unauthorized, Messages, Notifications, Discover } from './pages';
import { ProtectedRoute, AuthRoute } from './routes/';

const Routes = (): JSX.Element => (
  <>
    <Switch>
      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/discover" component={Discover} />
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
