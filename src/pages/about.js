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
    <div className="column-66">
    AAAAAAAAAA
    </div>
    <div className="column-33">
   AAAAAAAAA
    </div>
  </div>
</div>

<div className="aboutcontainer">
  <div className="row">
    <div className="column-33">
     WWWWWWWWWWWW
    </div>
    <div className="column-66">
   WWWWWWWWWWWW
    </div>
  </div>
</div>

 
 </div>
 
  );
}
export default About;
