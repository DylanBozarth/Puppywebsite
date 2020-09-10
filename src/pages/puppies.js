import React from "react";
import useTitle from "../hooks/useTitle";

import { Card, Container, Row } from "react-bootstrap";
import _ from "lodash";

function Puppies({ propdata }) {
  const puppies = _.get(propdata, "puppies", []);
 
  useTitle("Your Next Dog");
  
  return (
    <Container className=""> <Row>
    {puppies.map((puppies) => (
       
          <Card style={{width: '20rem'}}>
          <img className="cardimage" src={puppies.image} alt={puppies.name} />
          <h1>{puppies.name}</h1>
          <p>{puppies.price}</p>
        
        
        <h1>{puppies.description}</h1>
          </Card>
      ))}
    </Row></Container>
  );
}
export default Puppies;
