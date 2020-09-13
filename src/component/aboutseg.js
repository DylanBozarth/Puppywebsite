import React from "react";

import useTitle from "../hooks/useTitle";

function Aboutseg() {
  useTitle("Reputable Breeders");
  return (
    <div className="container-fluid">
      <h1 className="abouttitle">Good pups are raised by good hoomans</h1>
        
        
          <img className="aboutimage img-fluid" src="./puppies/family.jpg" fluid="true" />
       
        <div className="aboutbox">
          <h1 className="abouttitle">My family</h1>{" "}
         <p className="aboutdesc">We have a pretty good job, breeding little cute doggos is certainly not a stressful occupation.</p>
          
        </div>
     
    </div>
  );
}
export default Aboutseg;
