import React from "react";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
     <div className="container-fluid innerpage">
        <div className="text-center">
        <img
          className="aboutimage img-fluid "
          src="./assets/aboutimages/familywhite.jpg"
          alt="JYMR family "
        />
        <h1 className="puppyname">Good pups are raised by good hoomans</h1>
      </div>
      <div className="aboutcontainer">
  <div clasNames="row">
    <div className="col-sm-6">
      <div className="aboutcard">
        <img src="./assets/aboutimages/familyporch.jpg" className="img-fluid"></img>
        <p>Sample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample text </p>
      </div>
   </div>
    <div className="col-sm-6">
   wewr
    </div>
  </div>
</div>

 </div>
 
  );
}
export default About;
