import React from "react";

import { Card, Container, Col } from "react-bootstrap";

import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
useTitle('JYMR doodles');
  return (
   
      <Container className="card-page">
        <Col></Col>
        <Col>
        {parents.map((parents) => (
            <Card className="parentcard" key={parents.name}>
              <img
                className="homecard"
                height="350px"
                width="370px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.price}</p>

              <p className="cardesc">{parents.description}</p>
            </Card>
          ))}</Col>
          <Col></Col>
      </Container>
    
  );
}
export default Parents;
