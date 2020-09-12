import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";

import useTitle from "../hooks/useTitle";

function BreedInfo() {
  useTitle("JYMR Doodles");
  return (
    <Container fluid>
      <h1>Doodle facts</h1>
    </Container>
  );
}
export default BreedInfo;
