import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router
      basename={window.__POWERED_BY_QIANKUN__ ? "/" : "/children/app2-history/"}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>App2</p>
          <Link to={"/app1"}>App1</Link>
          <Link to={"/app1/about"}>about</Link>
          <Link to={"/app1/users"}>users</Link>
        </header>
      </div>
    </Router>
  );
}

export default App;
