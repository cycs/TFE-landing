import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import 'normalize.css';
import './reset.css'
import './index.css';
import './variables.css';
import './grid.css';

import App from './App';
import About from './components/About'
import Credits from './components/Credits'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/credits" component={Credits} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
