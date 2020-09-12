import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import Aboutseg from "../component/aboutseg";
import Aboutseg2 from "../component/aboutseg2";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
    <Container fluid>
      <Aboutseg />
      <Aboutseg2 />
    </Container>
  );
}
export default About;
