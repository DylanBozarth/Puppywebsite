import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import useTitle from "../hooks/useTitle";

function Aboutseg() {
  useTitle("Reputable Breeders");
  return (
    <Container fluid>
      <Col><h1 className="abouttitle">Here's how we love our puppers</h1></Col><Row>
        <Col></Col>
        <Col>
          <Image width="300px" height="250px"  src="./puppies/shiba.jpg" ></Image>
          <p className="aboutdesc">Rigorous training</p>
        </Col>
        <Col>
          <Image width="300px" height="250px"  src="./puppies/doodle.jpg" ></Image>
          <p className="aboutdesc">Weaponized Cuteness</p>
        </Col>
        <Col>
          <Image width="300px" height="250px" src="./puppies/poof.jpg" ></Image>
          <p className="aboutdesc">Extreme conditioning</p>
        </Col>
        <Col></Col>
      </Row>
      <h1 className="puppytitle">Some of our past greats</h1>
    </Container>
  );
}
export default Aboutseg;