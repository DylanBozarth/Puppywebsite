import React from "react";
import Slider from "react-slick";
import useTitle from "../hooks/useTitle";

import { Card, Container } from "react-bootstrap";
import _ from "lodash";

function Puppies({ propdata }) {
  const puppies = _.get(propdata, "puppies", []);
  useTitle("Your Next Dog");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="wrapper">
    <h2>Puppies</h2>
       <Slider {...settings}>
      {puppies.map((puppies) => (
       <div>
        
        
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={puppies.image} alt={puppies.name} />
            <Card.Body>
              <Card.Title className="black">{puppies.name}</Card.Title>
              <Card.Text className="black">{puppies.description}</Card.Text>
            </Card.Body>
          </Card>
         
        </div>
      ))}</Slider>
      
      
        
  
    </div>
  );
}
export default Puppies;
