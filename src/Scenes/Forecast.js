import { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import FiveDayForecast from './FiveDayForecast';


const API_KEY = "06c2ed9eb2345f27c26c6b863d8aa0f1"


export default class Forecast extends Component { 
  state = {
    loading: false,
    forecast: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.findWeatherAt(this.props.zipcode);
  }

  async componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });
    this.findWeatherAt(nextProps.zipcode);
  }

  async findWeatherAt(zipcode) {
    try {
    this.setState({ loading: true });
    console.log('Looking up forecast for zipcode:', zipcode);
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode}&units=imperial&appid=${API_KEY}&value&cnt=5`);
    console.log('Retrieved forecast for zipcode', zipcode, res.data);
    this.setState({
            loading: false,
            forecast: res.data.list.map(item => ({
              date: moment(item.dt * 1000),
              temp: item.temp.day,
         }))
    });
  } catch (er) {
    console.log('Error retrieving forecast', er.message);
    this.setState({ error: er.message });
  }
}

render() {
   return (
     <div>
     <FiveDayForecast
        forecast={this.state.forecast}
        loading={this.state.loading}
     />
     </div>
   );
 }
}