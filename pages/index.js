import React, { Component } from 'react';
import Forecast from '../components/Forecast';
import Layout from '../components/Layout';

export default class Index extends Component { 
render() {
    return (
      <Layout>
      <Forecast />
      </ Layout>
    );
  }
}