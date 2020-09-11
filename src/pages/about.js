import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src="./puppies/family.jpg" fluid></Image>
        </Col>
        <Col>
          <h1>About us</h1>{" "}
          <h4>WE breed labrodoodles and they're fucking cute</h4> <br />
          <h4>WE breed labrodoodles and they're fucking cute</h4> <br />
          <h4>WE breed labrodoodles and they're fucking cute</h4> <br />
          <h4>WE breed labrodoodles and they're fucking cute</h4> <br />
          
        </Col>
      </Row>
    </Container>
  );
}
export default About;
