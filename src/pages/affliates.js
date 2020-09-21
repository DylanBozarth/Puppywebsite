import React from "react";
import {
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import useTitle from "../hooks/useTitle";

function Affliates() {
  useTitle("JYMR Doodles");
  return (
    <div className="container-fluid">
      <h1 className="puppytitle">Our Affliates</h1>
      <div className="row">
        <div className="affliatepage">
          <NavLink
            href="https://arthemisclothing.com/"
            className="nohighlight"
            target="_blank"
          >
            <Card className="affcard">
              <CardImg
                src="/assets/arthemis-clothing.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Arthemis Clothing</CardTitle>

                <CardText>
                  Arthemis Clothing for Dogs and Cats. 15% off your entire
                  purchase plus free shipping.
                  <br /> Use the Code JYMR15 at checkout.
                </CardText>
              </CardBody>
            </Card>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Affliates;
