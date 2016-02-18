import React from 'react';
import hue from 'node-hue-api';

export default class Bridges extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {bridges: []}

    this.setBridges  = this.setBridges.bind(this);
    this.updateBridges = this.updateBridges.bind(this);

    this.updateBridges();
  }

  setBridges(bridges_payload) {
    this.setState({bridges: bridges_payload});
  }

  updateBridges() {
    return hue.nupnpSearch().then(this.setBridges).done()
  }

  render() {
    return(
      <div>
        Bridges:
        {JSON.stringify(this.state.bridges)}
      </div>
    );
  }
}