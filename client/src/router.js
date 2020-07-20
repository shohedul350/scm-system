import React from 'react';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import AdminState from './context/adminContext/adminState'
import PrivetRoute from './privetRoute'
import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';


const PublicRoutes = () => {



  return (
  <AdminState>
      <BrowserRouter>
      <Switch>
      <div>
        <Route
          exact
          path={'/'}
          component={asyncComponent(() => import('./containers/Page/signin'))}
        />
        <Route
          exact
          path={'/404'}
          component={asyncComponent(() => import('./containers/Page/404'))}
        />
        <Route
          exact
          path={'/500'}
          component={asyncComponent(() => import('./containers/Page/500'))}
        />
        <Route
          exact
          path={'/signin'}
          component={asyncComponent(() => import('./containers/Page/signin'))}
        />
        <Route
          exact
          path={'/signup'}
          component={asyncComponent(() => import('./containers/Page/signup'))}
        />
        <Route
          exact
          path={'/forgotpassword'}
          component={asyncComponent(() =>
            import('./containers/Page/forgotPassword'))}
        />
        <Route
          exact
          path={'/resetpassword'}
          component={asyncComponent(() =>
            import('./containers/Page/resetPassword'))}
        />
     

     
        <PrivetRoute
          path="/dashboard"
          component={App}

        />
      </div>
      </Switch>
      </BrowserRouter>
    </AdminState>
  );
};

export default PublicRoutes