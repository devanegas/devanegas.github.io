import React, { Component } from 'react';
import Header from './Header';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <React.Fragment>
          <Header/>
      </React.Fragment>
    );
  }
}