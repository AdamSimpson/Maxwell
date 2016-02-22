import React from 'react';
import { connect } from 'react-redux';
import hue from 'node-hue-api';
import _ from 'underscore';
import bridgesTable from '../components/bridges_table.jsx'

class BridgesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      bridgesTable(this.props.bridges)
    );
  }

}

const mapStateToProps = (redux_state) => {
  return {
    bridges: redux_state.bridges
  }
};

const Bridges = connect(mapStateToProps)(BridgesContainer);
export default Bridges;
