import React from "react";
/* Stateless Functional Component */
const Weather = props => (  // implicit return (no need to use the return keyword)
  // props is an object that contains all the properties that were passed to this component
    <div className="weather__info">
      { 
      props.city && props.country && <p className="weather__key">Location:  
        <span className="weather__value"> { props.city }, { props.country }</span>
        </p> 
      }
      {
       props.temperature && <p className="weather__key">Temperature: 
        <span className="weather__value"> { props.temperature } ºC</span>
        </p> 
       }
      {
       props.humidity && <p className="weather__key">Humidity: 
        <span className="weather__value"> { props.humidity } %</span>
        </p> 
       }
      {
       props.description && <p className="weather__key">Conditions: 
        <span className="weather__value"> { props.description }</span>
        </p> 
       }
      {
       props.error && <p className="weather__key">
        <span className="weather__error"> { props.error }</span>
        </p> 
       }
       { 
      props.city && props.country && <button onClick={props.clearWeather}>Clear</button>
      }
    </div>
  );
export default Weather;