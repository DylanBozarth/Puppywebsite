import React from "react";

import useTitle from "../hooks/useTitle";
import { Card, Container } from "react-bootstrap";

import _ from "lodash";

function Puppies({ propdata }) {
  const puppies = _.get(propdata, "puppies", []);
  useTitle("Your Next Dog");
  return (
    <div className="page">
    
      
      {puppies.map((puppies) => (
        <div className="box">
        <div id="card-container">
      <div id="card">
        <div className="front face">
          
          <img className="cardimage" src={puppies.image} alt={puppies.name} />
          <h1>{puppies.name}</h1>
          <p>{puppies.price}</p>
        </div>
        <div className="back face">
        <h1>{puppies.description}</h1>
          </div></div></div></div>
      ))}
      
        
  
    </div>
  );
}
export default Puppies;
