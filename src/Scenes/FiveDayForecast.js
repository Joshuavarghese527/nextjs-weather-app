import { Component } from 'react';
import Loading from '../components/Loading';
import Item from '../components/Item';
import styled from 'styled-components';


const ForecastWrapper = styled.section`
  background: #2d2d2d;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  left: 0;
  position: absolute;
`;

const WeatherBoxLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: '.5px',
            width: '106%',
            marginLeft: -5
        }}
    />
);

 export default class FiveDayForecast extends Component { 
  render() {
   return (
  <ForecastWrapper>
  <div className="ForecastView">
    {this.props.loading ? (
      <Loading />
    ) : (
      <div className="box-wrapper">
        {this.props.forecast.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </div>
    )}
  </div>
  <style jsx>{`

             .box-wrapper {
              align-items: center;
              text-align: center;
              min-height: 100vh;
              width: 100%;
              list-style: none;


              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;

              -webkit-flex-flow: row wrap;
              justify-content: center;
            }
          `}
   </style>
</ForecastWrapper>
      );
    }
 }
