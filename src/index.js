// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import About from './Pages/About'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
