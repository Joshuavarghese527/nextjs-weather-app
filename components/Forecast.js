import { Component } from 'react';
import Layout from './Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
     <MuiThemeProvider>
         <Form onChange={fields => this.onChange(fields)} />
         <p> 
           {JSON.stringify(this.state.fields, null, 2)}
         </p>
    </MuiThemeProvider>
      )
   }
 }