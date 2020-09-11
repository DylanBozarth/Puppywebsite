import React from "react";
import useTitle from "../hooks/useTitle";

import { Card, Container, Row, Col } from "react-bootstrap";
import _ from "lodash";

function Puppies({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  const labradoodles = _.get(propdata, "labradoodles", []);
  const goldendoodles = _.get(propdata, "goldendoodles", []);

  useTitle("Your Next Dog");

  return (
    <Container className="puppypage" fluid>
      <div className="puppyseperator">
        <h1>Poodles!</h1>
        <p>Our best sellers</p>
      </div>
      <Col>
        <Row>
          {poodles.map((poodles) => (
            <Card style={{ width: "20rem" }}>
              <img
                className="homecard"
                height="300px"
                width="280px"
                src={poodles.image}
                alt={poodles.name}
              />
              <h1>{poodles.name}</h1>
              <p>{poodles.price}</p>

              <p className="cardesc">{poodles.description}</p>
            </Card>
          ))}
        </Row>
      </Col>
      <div className="puppyseperator">
        <h1>Labradoodles</h1>
        <p>50% poodle, 50% labrador, 100% love</p>
      </div>
      <Col>
        <Row>
          {labradoodles.map((labradoodles) => (
            <Card style={{ width: "20rem" }}>
              <img
                className="homecard"
                height="300px"
                width="280px"
                src={labradoodles.image}
                alt={labradoodles.name}
              />
              <h1>{labradoodles.name}</h1>
              <p>{labradoodles.price}</p>

              <p className="cardesc">{labradoodles.description}</p>
            </Card>
          ))}
        </Row>
      </Col>
      <div className="puppyseperator">
        <h1>Goldendoodles! </h1>
        <p>I don't know how to describe them, but they sure are cute.</p>
      </div>
      <Col>
        <Row>
          {goldendoodles.map((goldendoodles) => (
            <Card style={{ width: "20rem" }}>
              <img
                className="homecard"
                height="300px"
                width="280px"
                src={goldendoodles.image}
                alt={goldendoodles.name}
              />
              <h1>{goldendoodles.name}</h1>
              <p>{goldendoodles.price}</p>

              <p className="cardesc">{goldendoodles.description}</p>
            </Card>
          ))}
        </Row>
      </Col>
    </Container>
  );
}
export default Puppies;
