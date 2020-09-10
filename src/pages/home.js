import React from "react";
import Puppies from "./puppies";

import { Card, Container } from "react-bootstrap";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Home({ propdata }) {
  useTitle("JYMR doodles");
  const puppies = _.get(propdata, "puppies", []);
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
    
      {puppies.map((puppies) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={puppies.image} alt={puppies.name} />
        <Card.Body>
          <Card.Title className="black">{puppies.name}</Card.Title>
          <Card.Text className="black">
            {puppies.description}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
      </div>
      ;
    </div>
  );
}
export default Home;
