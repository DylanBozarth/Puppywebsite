import React from "react";

import { Card, Container, Row } from "react-bootstrap";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Home({ propdata }) {
  useTitle("JYMR doodles");
  const goldendoodles = _.get(propdata, "goldendoodles", []);
  return (
    <div>
      <h1 className="homeh1">
        <small>JYMR DOODLES</small> Super cute puppies{" "}
      </h1>
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/shiba.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/poof.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/pups.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/labs.jpg)" }}
        ></div>
      </div>
      
      <div className="puppysegment"><div className="pageline"></div>
        <h1 className="puppytitle">Your next dog</h1>
        
 

    <div className="homepuppies">
    <Row>
      {goldendoodles.map((goldendoodles) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={goldendoodles.image} alt={goldendoodles.name} />
        <Card.Body>
          <Card.Title className="black">{goldendoodles.name}</Card.Title>
          <Card.Text className="black">
            {goldendoodles.description}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </Row></div>
      </div>
      ;
    </div>
  );
}
export default Home;
