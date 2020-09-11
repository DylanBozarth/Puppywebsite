import React from "react";

import { Card, Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Home({ propdata }) {
  useTitle("JYMR doodles");
  const poodles = _.get(propdata, "poodles", []);
  const labradoodles = _.get(propdata, "labradoodles", []);
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
      <div className="puppysegment">
        <div className="pageline"></div>
        <h1 className="puppytitle">Your next dog</h1>

        <Container className="homepuppies">
          <Row>
            {goldendoodles.slice(0, 1).map((goldendoodles) => (
              <Col >
                <Card className="homecard" style={{ width: "20rem" }}>
                  <Card.Img
                    height="300px"
                    width="280px"
                   
                    fluid={true}
                    variant="top"
                    src={goldendoodles.image}
                    alt={goldendoodles.name}
                    
                    className="homecard2"
                  />

                  <Card.Body className="homecardbot">
                    <Card.Title className="black">
                      {goldendoodles.name}
                    </Card.Title>
                    <div className="cardesc">
                      <Card.Text className="black">
                        {goldendoodles.description}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {poodles.slice(0, 1).map((poodles) => (
              <Col>
                <Card style={{ width: "20rem" }} className="homecard">
                  <Col>
                    <Card.Img
                      height="300px"
                      width="280px"
                      className="homecard2"
                      variant="top"
                      src={poodles.image}
                      alt={poodles.name}
                      fluid={true}
                    />
                  </Col>
                  <Card.Body className="homecardbot">
                    <Card.Title className="black">{poodles.name}</Card.Title>
                    <div className="cardesc">
                      <Card.Text className="black">
                        {poodles.description}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {labradoodles.slice(0, 1).map((labradoodles) => (
              <Col>
                <Card style={{ width: "20rem" }} className="homecard">
                  <Col>
                    <Card.Img
                      height="300px"
                      width="280px"
                      className="homecard2"
                      variant="top"
                      src={labradoodles.image}
                      alt={labradoodles.name}
                      fluid={true}
                    />
                  </Col>
                  <Card.Body className="homecardbot">
                    <Card.Title className="black">
                      {labradoodles.name}
                    </Card.Title>
                    <div className="cardesc">
                      <Card.Text className="black">
                        {labradoodles.description}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="seemorepuppies">See More Puppies!</div>
        <div className="pageline"></div>
        <div className="aboutsegment">
          <h1>Good pups come from good Hoomans</h1>

          <img className="banner" src="./puppies/family.jpg"></img>
          <Jumbotron>
            <h1>wewewe</h1>
          </Jumbotron>
        </div>
      </div>
      ;<div className="pageline"></div>
    </div>
  );
}
export default Home;
