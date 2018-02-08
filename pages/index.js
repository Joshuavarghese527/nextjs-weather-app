import React, { Component } from 'react'
import Form from '../src/Scenes/form';
import Forecast from '../src/Scenes/Forecast';
import Layout from '../src/Scenes/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Index extends Component { 
render() {
    return (
      <MuiThemeProvider>
        <Layout>
        <Form />
        </Layout >
      </ MuiThemeProvider>
    );
  }
}