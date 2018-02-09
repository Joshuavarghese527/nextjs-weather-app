import { Component } from 'react';
import Loader from 'react-loader-spinner'

 export default class Loading extends Component { 
 render() {
   return(
     <div className= "loading">
    <Loader 
       type="Circles"
       color="#f2f2f2"
       height="100"  
       width="100"
    />
    <h1>Please Enter Valid Zipcode Above <br /> To Obtain 5-Day Forecast...</h1>
    <style jsx> {`
    .loading {
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
              color: white;
      }
      h1 {
         font-family: TimposHeadline-Semibold;
         font-size: 30px;
         margin: 15px;

      }

      `}
      </style>
    </div>
   );
    }
 }