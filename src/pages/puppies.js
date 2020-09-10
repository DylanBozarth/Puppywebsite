import React from "react";
import useTitle from "../hooks/useTitle";

import { Card, Container, Row } from "react-bootstrap";
import _ from "lodash";

function Puppies({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  const labradoodles = _.get(propdata, "labradoodles", []);
  const goldendoodles = _.get(propdata, "goldendoodles", []);
 
  useTitle("Your Next Dog");
  
  return (
    <Container className="wrapper"> 
    <Row>
    {poodles.map((poodles) => (
       
          <Card style={{width: '20rem'}}>
          <img className="cardimage" src={poodles.image} alt={poodles.name} />
          <h1>{poodles.name}</h1>
          <p>{poodles.price}</p>
        
        
        <h1>{poodles.description}</h1>
          </Card>
      ))}
    </Row>
    <Row>
    {labradoodles.map((labradoodles) => (
       
          <Card style={{width: '20rem'}}>
          <img className="cardimage" src={labradoodles.image} alt={labradoodles.name} />
          <h1>{labradoodles.name}</h1>
          <p>{labradoodles.price}</p>
        
        
        <h1>{labradoodles.description}</h1>
          </Card>
      ))}
      </Row>
      <Row>
    {goldendoodles.map((goldendoodles) => (
       
          <Card style={{width: '20rem'}}>
          <img className="cardimage" src={goldendoodles.image} alt={goldendoodles.name} />
          <h1>{goldendoodles.name}</h1>
          <p>{goldendoodles.price}</p>
        
        
        <h1>{goldendoodles.description}</h1>
          </Card>
      ))}
    </Row>
    
    
    
    
    </Container>
  );
}
export default Puppies;
