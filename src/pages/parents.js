import React from "react";

import { Card, Container } from "react-bootstrap";

import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);

  return (
    <Container className="card-page">
      {parents.map((parents) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={parents.image} alt={parents.name} />
        <Card.Body>
          <Card.Title>{parents.name}</Card.Title>
          <Card.Text>
            {parents.description}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </Container>
  );
}
export default Parents;