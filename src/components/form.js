import React from 'react';
import TextField from 'material-ui/TextField';
import { ToastContainer, toast } from 'react-toastify';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Arrow from 'material-ui/svg-icons/navigation/arrow-downward';
import Forecast from '../Scenes/Forecast';
import Router from 'next/router';
import { FormWrapper, Div, Paragraph, Input, H1, styles } from './styles'

const smoothScroll = (h) => {
  let i = h || 0;
  if (i < 700) {
    setTimeout(() => {
      window.scrollTo(0, i);
      smoothScroll(i + 10);
    }, 10);
  }
}


export default class Form extends React.Component {
 constructor(props) {
    super(props)

    this.state = {
    zipcode: "",
    zipCodeError: "",
    loading: false
  }
}

   onChange = e => {
    this.setState({ zipcode: e.target.value });
  }


  validate = () => {    
    const isValidZip =  /^([0-9]){5}(([ ]|[-])?([0-9]){4})?$/;
    let isError = false;
    const errors = {
      zipcodeError: ""
    };

    if (!this.state.zipcode.match(isValidZip)) {
      isError = true;
      errors.zipCodeError = toast.error("⚠ Please enter a valid zipcode!", {
      position: toast.POSITION.TOP_RIGHT
    });
    }

    this.setState(errors);

    return isError;

  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if(!err){
    Router.push('/').then(() => smoothScroll());
    this.setState({
      zipcode: this.state.zipcode,
      zipCodeError: "",
    });
  }
}

render() {
    const { zipcode } = this.state
    return (
      <FormWrapper>
        <Div>
          <H1>Weather app</H1>
          <Paragraph>Type in your zip code to see how awful the weather is 
          <br /> in your area this week</Paragraph>
          <form onSubmit={e => this.onSubmit(e)}>
          <Input
                 name="zipCode"
                 placeholder='00000' 
                 value={this.state.zipcode}
                 onChange={this.onChange}
                 error={this.state.zipCodeError}
                 size="1em"
                 innerRef={x => { this.input = x }}
                 onMouseEnter={() => this.input.focus()}
           />

           <br />
           <IconButton 
           iconStyle={styles.mediumIcon}
           style={styles.medium}
           onClick={e => this.onSubmit(e)}
           >
           <Arrow 
           />
          </IconButton>
          <ToastContainer autoClose={5000} />
          </form>
        </Div>
        <Forecast zipcode={this.state.zipcode} />
      </FormWrapper>
     );
  }
}