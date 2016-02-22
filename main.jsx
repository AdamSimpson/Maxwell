import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import Navigation from './components/navigation.jsx'
import Home from './components/home.jsx';
import Lights from './components/lights.jsx';
import Bridges from './containers/bridges.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/main.js'

// Doesn't need to be a class, can just return render() content I think
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
let store = createStore(rootReducer);

// Render entire application
ReactDOM.render(<Provider store={store}>
                  <MainApp/>
                </Provider>
                , document.getElementById('main_app'));
