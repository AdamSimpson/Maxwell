import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';

const AppBarExampleIcon = () => (
  <AppBar
    title="Maxwell"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarExampleIcon;

ReactDOM.render(<AppBarExampleIcon />, document.getElementById('content'));