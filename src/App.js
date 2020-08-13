import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import Login from '../src/Pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
             <Login />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;