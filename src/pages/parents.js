import React from "react";

import { Card, Container } from "react-bootstrap";

import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
useTitle('JYMR doodles');
  return (
    <div className="page">
      <Container className="card-page">
        {parents.map((parents) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={parents.image} alt={parents.name} />
            <Card.Body>
              <Card.Title className="black">{parents.name}</Card.Title>
              <Card.Text className="black">{parents.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
export default Parents;
