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
              App2
            </p>
            <Link
                to={'/app1'}
            >
              App1
            </Link>
          </header>
        </div>
      </Router>
  );
}

export default App;
