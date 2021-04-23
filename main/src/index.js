import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './page/App1';
import App2 from './page/App2';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';

// 挂载子应用方式一

// registerMicroApps([
//   {
//     name: 'app1',
//     entry: '//localhost:3001',
//     container: '#children-wrapper',
//     activeRule: '/app1',
//   },
//   {
//     name: 'app2',
//     entry: '//localhost:3002',
//     container: '#children-wrapper',
//     activeRule: '/app2',
//   },
// ]);
// // 启动 qiankun
// start();

const renderRoute = (routes) => {
  return <Switch>
    {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
}
export function RouteWithSubRoutes(route) {
  if (route.redirect) {
    return <Redirect to={route.redirect} />;
  }
  return (
    <Route
      path={route.path}
      render={(props) => (
          <route.component {...props}  exact={true} >
            {renderRoute(route?.routes || [])}
          </route.component>
      )}
    />
  );
}
const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/app1',
        component: App1,
      },
      {
        path: '/app2',
        component: App2,
      },
      {
        path: '/',
        redirect: '/app1',
      },
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
