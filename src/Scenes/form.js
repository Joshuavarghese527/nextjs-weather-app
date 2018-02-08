import React from 'react';
import TextField from 'material-ui/TextField';
import { ToastContainer, toast } from 'react-toastify';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Arrow from 'material-ui/svg-icons/navigation/arrow-downward';
import Forecast from './Forecast';
import styled from 'styled-components';


const styles = {
   mediumIcon: {
    width: 28,
    height: 28,
  }
}

const FormWrapper = styled.section`
  background: #cd432e;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  left: 0;
  position: absolute;
`;

export default class Form extends React.Component {
 constructor(props) {
    super(props)

    this.state = {
    zipcode: "",
    zipCodeError: ""
  }
}

   onChange = e => {
    this.setState({ zipcode: e.target.value })
  }


  validate = () => {    
    const isValidZip =  /^([0-9]){5}(([ ]|[-])?([0-9]){4})?$/;
    let isError = false;
    const errors = {
      zipcodeError: ""
    };

    if (!this.state.zipcode.match(isValidZip)) {
      isError = true;
      errors.zipCodeError = "Zipcode is invalid, please enter a valid zipcode";
    }

    this.setState(errors);

    return isError;

  };

  onSubmit = (e) => {
    e.preventDefault();
    //this.props.onSubmit(this.state);
    const err = this.validate();
    if(!err){
    //clear form
    this.setState({
      zipcode: "",
      zipCodeError: "",
    });
  }
}

render() {
    const { zipCode } = this.state
    return (
      <FormWrapper>
          <TextField
                 name="zipCode"
                 placeholder='00000' 
                 value={this.state.zipCode}
                 onChange={this.onChange}
                 errorText={this.state.zipCodeError}
           />
           <br />
           <IconButton 
           iconStyle={styles.mediumIcon}
           style={styles.medium}
           >
           <Arrow 
             color="white"/>
          </IconButton>
      <Forecast zipcode={this.state.zipcode} />
    </FormWrapper>
     );
  }
}