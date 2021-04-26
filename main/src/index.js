import React from 'react';
import ReactDOM from 'react-dom';
// import App1 from './page/App1';
// import App2 from './page/App2';
import App3 from './page/App3';
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
registerMicroApps([
  {
    name: 'app1',
    entry:
      process.env.NODE_ENV === 'development'
        ? '//localhost:3001'
        : '/children/app1-history/',
    container: '#children-wrapper',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry:
      process.env.NODE_ENV === 'development'
        ? '//localhost:3002'
        : '/children/app2-history/',
    container: '#children-wrapper',
    activeRule: '/app2',
  },
]);
// 启动 qiankun
start();

const renderRoute = (routes) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
      })}
    </Switch>
  );
};

export function RouteWithSubRoutes(route) {
  if (route.redirect) {
    return <Redirect exact={true} to={route.redirect} />;
  } else {
    return (
      <Route
        path={route.path}
        exact={route.exact ?? (route?.routes?.length ? false : true)}
        // exact={false}
        render={(props) => {
          return (
            <route.component {...props}>
              {renderRoute(route?.routes || [])}
            </route.component>
          );
        }}
      />
    );
  }
}
const App4 = (props) => {
  return <div>App4</div>;
};
const routesArr = [
  {
    path: '/',
    component: Layout,
    routes: [
      // {
      //   path: '/app1',
      //   component: App1,
      // },
      // {
      //   path: '/app2',
      //   component: App2,
      // },
      {
        path: '/',
        redirect: '/app3',
      },
      {
        path: '/app3',
        component: App3,
      },
      {
        path: '/app4',
        component: App4,
      },
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routesArr.map((route, i) => (
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
