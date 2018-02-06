import React from 'react';
import TextField from 'material-ui/TextField';
import { ToastContainer, toast } from 'react-toastify';

export default class Form extends React.Component {
  state = {
    zipCode: "",
    zipCodeError: ""
  }

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value})
    this.setState({
      [e.target.name]: e.target.value
    });
  };




  validate = () => {    
    const isValidZip =  /^([0-9]){5}(([ ]|[-])?([0-9]){4})?$/;
    let isError = false;
    const errors = {
      zipcodeError: ""
    };

    if (!this.state.zipCode.match(isValidZip)) {
      isError = true;
      errors.zipCodeError = "Zipcode is invalid, please enter a valid zipcode";
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    //this.props.onSubmit(this.state);
    const err = this.validate();
    if(!err){
    //clear form
    this.setState({
      zipCode: "",
      zipCodeError: ""
    });
    this.props.onChange({
      zipCode: ""
    });
  }
}


  render() {
    return (
      <form>
          <TextField 
                 name="zipCode"
                 hintText='00000' 
                 value={this.state.zipCode}
                 onChange={e => this.change(e)}
                 errorText={this.state.zipCodeError}
           />
          <button onClick={e => this.onSubmit(e)}>Submit Button </button>
      </form>
     );
  }
}