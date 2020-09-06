import React from "react";

function Puppies(props, propdata) {
  return <div>{props.puppies.map( puppies => 
      <h1>{puppies.name}</h1>
  )}</div>;
}
export default Puppies;
