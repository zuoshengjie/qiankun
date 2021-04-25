import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const About = () => {
  return (
    <div>
      About
      <div>
        <Link to={`/app1/users`}>users</Link>
        <Link to={`/app1`}>app1</Link>
      </div>
    </div>
  );
};

const Users = () => {
  return (
    <div>
      Users
      <div>
        <Link to={`/app1/about`}>about</Link>
        <Link to={`/app1`}>app1</Link>
      </div>
    </div>
  );
};

function App() {
  console.log(window.__POWERED_BY_QIANKUN__, "window.__POWERED_BY_QIANKUN__");
  return (
    <>
      <div>app1</div>
      <Router
        basename={
          window.__POWERED_BY_QIANKUN__ ? "/" : "/children/app1-history/"
        }
      >
        <Switch>
          <Route exact={true} path="/app1">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>App1</p>
                <Link to={"/app2"}>App2</Link>
                <Link to={`/app1/about`}>about</Link>
                <Link to={`/app1/users`}>users</Link>
              </header>
            </div>
          </Route>
          <Route path="/app1/about">
            <About />
          </Route>
          <Route path="/app1/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
