import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";
import useTitle from "../hooks/useTitle";

function Aboutseg() {
  useTitle("Reputable Breeders");
  return (
    <Container fluid>
      <Col><h1 className="abouttitle">Good pups are raised by good hoomans</h1></Col><Row>
        
        
          <Image src="./puppies/family.jpg" fluid="true"></Image>
       
        <Col>
          <h1 className="abouttitle">My family</h1>{" "}
         <p className="aboutdesc">We have a pretty good job, breeding little cute doggos is certainly not a stressful occupation.</p>
          
        </Col>
      </Row>
    </Container>
  );
}
export default Aboutseg;
