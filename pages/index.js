import React, { Component } from 'react'
import Forecast from '../src/Scenes/form';
import Layout from '../src/Scenes/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Index extends Component { 
render() {
    return (
      <Layout>
      <MuiThemeProvider>
        <Forecast />
      </ MuiThemeProvider>
      </Layout >
    );
  }
}