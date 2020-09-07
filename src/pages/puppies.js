import React from "react";

import { Card } from "react-bootstrap";

import _ from "lodash";

function Puppies({ propdata }) {
  const puppies = _.get(propdata, "puppies", []);

  return (
    <div>
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
    </div>
  );
}
export default Puppies;
