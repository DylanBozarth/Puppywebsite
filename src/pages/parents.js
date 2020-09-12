import React from "react";

import { Card, Container, Col, Row } from "react-bootstrap";

import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
  useTitle("JYMR doodles");
  return (
    <Container className="parent-page" fluid="true">
      <Row>
        <Col>
          <h1>Goldendoogles</h1>
          {parents.slice(0, 2).map((parents) => (
            <Card
              className="parentcard"
              style={{ width: "16rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.price}</p>

              <p className="cardesc">{parents.description}</p>
            </Card>
          ))}
        </Col>
        <Col>
          <h1>Poodles</h1>
          {parents.slice(2, 4).map((parents) => (
            <Card
              className="parentcard"
              style={{ width: "16rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.price}</p>

              <p className="cardesc">{parents.description}</p>
            </Card>
          ))}
        </Col>
        <Col>
          <h1>Labradoodles</h1>
          {parents.slice(4, 6).map((parents) => (
            <Card
              className="parentcard"
              style={{ width: "16rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.price}</p>

              <p className="cardesc">{parents.description}</p>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Parents;
