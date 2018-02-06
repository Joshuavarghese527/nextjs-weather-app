import { Component } from 'react';
import Layout from './Layout';
import Form from './form';

export default class Forecast extends Component { 
 
  state = {
    fields:  {}
  };

  onChange = updatedValue => {
    this.setState ({ fields: {
      ...this.state.fields,
      ...updatedValue
      }
    });
  };

render() {
   return (
       <Layout>
         <Form onChange={fields => this.onChange(fields)} />
         <p> 
           {JSON.stringify(this.state.fields, null, 2)}
         </p>
       </Layout>
      )
   }
 }