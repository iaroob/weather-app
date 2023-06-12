import React from "react";
// Stateless Functional Component
const Forms = props => (  // implicit return (no need to use the return keyword)
  // props is an object that contains all the properties that were passed to this component
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button>Get Weather</button>
    </form>
  );

export default Forms;