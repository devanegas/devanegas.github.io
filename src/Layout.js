import React, { Component } from 'react';
import Navbar from "./components/Navbar";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div style={{margin: 0}}>
          <Navbar/>
          {this.props.children}
      </div>
    );
  }
}