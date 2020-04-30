import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Users from './Pages/Users';
import './App.scss';

function App() {
  return (
      <Router>
          <div>
              {/*nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>*/}

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path='/about'>
                      <About />
                  </Route>
                  <Route path='/users'>
                      <Users />
                  </Route>
                  <Route path='/'>
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
