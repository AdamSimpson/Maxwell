import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//class TopBar extends React.Component {
//  constructor(props) {
//    super(props);
//  }

//  render() {
//    <TopBar
//      title="Maxwell"
//      iconClassNameRight="muidocs-icon-navigation-expand-more"
 //   />
//  }
//}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    // Handle binding in constructor instead of defining functions with arrow syntax
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Nav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>House</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Lights</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Bridges</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

ReactDOM.render(<NavBar />, document.getElementById('content'));