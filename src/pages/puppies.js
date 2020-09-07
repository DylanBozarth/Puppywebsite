import React from "react";

import { Card, Container } from "react-bootstrap";

import _ from "lodash";

function Puppies({ propdata }) {
  const puppies = _.get(propdata, "puppies", []);

  return (
    <div className="page">
    <Container className="card-page">
      {puppies.map((puppies) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={puppies.image} alt={puppies.name} />
        <Card.Body>
          <Card.Title>{puppies.name}</Card.Title>
          <Card.Text>
            {puppies.description}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </Container></div>
  );
}
export default Puppies;
