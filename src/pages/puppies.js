import React from "react";
import Slider from "react-slick";
import useTitle from "../hooks/useTitle";

import { Card, Container } from "react-bootstrap";
import _ from "lodash";

function Puppies({ propdata }) {
  const SmallPuppies = _.get(propdata, "SmallPuppies", []);
  const MediumPuppies = _.get(propdata, "MediumPuppies", []);
  const LargePuppies = _.get(propdata, "LargePuppies", []);
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
    <h2 className="puppytitle">SmallPuppies</h2>
       <Slider {...settings}>
      {SmallPuppies.map((SmallPuppies) => (
       <div>
        
        
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={SmallPuppies.image} alt={SmallPuppies.name} />
            <Card.Body>
              <Card.Title className="black">{SmallPuppies.name}</Card.Title>
              <Card.Text className="black">{SmallPuppies.description}</Card.Text>
            </Card.Body>
          </Card>
         
        </div>
      ))}</Slider>
      <h1>Medium dogs</h1>
       <Slider {...settings}>
      {MediumPuppies.map((MediumPuppies) => (
       <div>
        
        
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={MediumPuppies.image} alt={MediumPuppies.name} />
            <Card.Body>
              <Card.Title className="black">{MediumPuppies.name}</Card.Title>
              <Card.Text className="black">{MediumPuppies.description}</Card.Text>
            </Card.Body>
          </Card>
         
        </div>
      ))}</Slider>
      <h1>Large doogles</h1>
       <Slider {...settings}>
      {LargePuppies.map((LargePuppies) => (
       <div>
        
        
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={LargePuppies.image} alt={LargePuppies.name} />
            <Card.Body>
              <Card.Title className="black">{LargePuppies.name}</Card.Title>
              <Card.Text className="black">{LargePuppies.description}</Card.Text>
            </Card.Body>
          </Card>
         
        </div>
      ))}</Slider>
        
  
    </div>
  );
}
export default Puppies;
