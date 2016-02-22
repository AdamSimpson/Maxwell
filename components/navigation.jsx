import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router'

import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import LightIcon from 'material-ui/lib/svg-icons/action/lightbulb-outline';
import RouterIcon from 'material-ui/lib/svg-icons/hardware/router';

//import DarkTheme from './dark_theme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//@ThemeDecorator(ThemeManager.getMuiTheme(DarkTheme))
class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {open: false};
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleNavChange = (path, event) => {
    // Push path to router to cause component to load
    this.context.router.push(path);

    // Close the left navbar
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title="Maxwell"
        />

        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleNavChange.bind(null, '/home')} leftIcon={<HomeIcon/>}>
            Home
          </MenuItem>
          <MenuItem onTouchTap={this.handleNavChange.bind(null, '/lights')} leftIcon={<LightIcon/>}>
            Lights
          </MenuItem>
          <MenuItem onTouchTap={this.handleNavChange.bind(null, '/bridges')} leftIcon={<RouterIcon/>}>
            Bridges
          </MenuItem>
        </LeftNav>

        {/* content supplied by router*/}
        {this.props.children}

      </div>
    );
  }
}

export default Navigation;
