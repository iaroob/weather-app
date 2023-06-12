import React from "react";
// Stateless Functional Component
const Titles = () => ( // implicit return (no need to use the return keyword)
  <div>
    <h1 className="title-container__title">Weather Finder</h1>
    <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
  </div>
);

export default Titles;