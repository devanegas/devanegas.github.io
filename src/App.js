import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home';
import { Layout } from "./Layout";
import "./index.css";
import ProjectsPage from './components/projects/ProjectsPage';
import AboutPage from './components/about/AboutPage';
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/about' component={AboutPage} />
      </Layout>
    );
  }
}
