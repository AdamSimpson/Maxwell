import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import Navigation from './components/navigation.jsx'
import Home from './components/home.jsx';
import Lights from './components/lights.jsx';
import Bridges from './components/bridges.jsx';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
  }

  // Render content portion using react-router
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Navigation}>
          <Route path="/home"    component={Home} />
          <Route path="/lights"  component={Lights} />
          <Route path="/bridges" component={Bridges} />
        </Route>
      </Router>
    )
  }
}

// Render entire application
ReactDOM.render(<MainApp/>, document.getElementById('main_app'));
