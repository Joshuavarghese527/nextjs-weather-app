import { Component }from 'react';
import styled from 'styled-components';

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

export default class Elements extends Component {
render() {
   return (
   <div>
         <div className="box">
       {this.props.date.format('dddd')}

        <WeatherBoxLine color="white" />

      <h1>{Math.round(this.props.temp)}&nbsp;<span>F</span></h1>
    </div>
          <style jsx>{`

            .box {
              background: #2d2d2d;
              padding: 5px;
              width: 130px;
              height: 150px;
              margin: 5px;
              border: 2px solid rgba(242, 242, 242, 0.6);

              line-height: 50px;
              color: #f2f2f2f2;
              font-weight: bold;
              font-size: 14px;
              text-align: center; 
              font-family: apercu_regular_pro 
            }

            h1 {
              font-family: TimposHeadline-Semibold;
              font-size: 45px;
              text-align: center;
              margin-top: 25px;
            }

            span {
               font-size: 16px;
               font-family: apercu_regular_pro 
            }

            `}
          </style>
  </div>
      );
    }
 }