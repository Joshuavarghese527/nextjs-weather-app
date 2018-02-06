import React from 'react'

export default class Form extends React.Component {
  state = {
    zipCode: ''
  }

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value})
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    //this.props.onSubmit(this.state);
    this.setState({
      zipCode: ""
    });
    this.props.onChange({
      zipCode: ""
    });
  }


  render() {
    return (
      <form>
          <input name="zipCode"
                 placeholder='00000' 
                 value={this.state.zipCode}
                 onChange={e => this.change(e)}
           />
          <button onClick={e => this.onSubmit(e)}>Submit Button </button>
      </form>
     );
  }
}