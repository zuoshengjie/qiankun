import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              App1
            </p>
            <Link
                to={'/app2'}
            >
              App2
            </Link>
          </header>
        </div>
      </Router>
  );
}

export default App;
