import React from "react";
import {
 
  NavLink,
 
} from "reactstrap";
import useTitle from "../hooks/useTitle";

function Affliates() {
  useTitle("JYMR Doodles");
  return (
    <div className="container-fluid">
      <h1 className="puppytitle">Our Affliates</h1>
      <div className="row">
        <NavLink href="https://arthemisclothing.com/" className="nohighlight" target='_blank'>
      <div className=" affliatediv">
         <img
            className="affliateimage"
            height="300px"
            width="280px"
            src="./assets/arthemis-clothing.jpg"
            alt="poodle"
          /> 
          <h3>Arthemis pet Clothing</h3>
          <p>
          Arthemis Clothing for Dogs and Cats. 15% off your entire purchase plus free shipping.

Discount is automatically applied when you click on the Arthemis picture and linked over from our site or use the Code JYMR15 at checkout.
          </p>
          
        </div>
        </NavLink>
        <div className="col-sm-12">
        <div className="Affliates"><h3>GoldenDoodle </h3>
          <p>
            A Goldendoodle is a dog crossbreed bred from a Golden Retriever and
            a Poodle, their name is a portmanteau of Golden Retriever and
            Labradoodle.[1][2] Whilst primarily bred as companion dogs,
            Goldendoodles have been successfully trained as therapy dogs, guide
            dogs[2] and other forms of assistance dogs.[3]
          </p></div>
          <img
            className=""
            height="300px"
            width="280px"
            src="./puppies/shiba.jpg"
            alt="Goldendoodle"
          />
        </div>
      </div>
    </div>
  );
}
export default Affliates;