import React from "react";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
    <div className="container-fluid aboutpage">
      
    <h1 className="abouttitle">Good pups are raised by good hoomans</h1>
      
    
        <img className="aboutimage img-fluid" src="./puppies/family.jpg" alt="JYMR family " />
     
      <div className="aboutbox">
        <h1 className="abouttitle">My family</h1>{" "}
       <p className="aboutdesc">We have a pretty good job, breeding little cute doggos is certainly not a stressful occupation.</p>
        
      </div>
     
    <h1 className="abouttitle">Here's how we love our puppers</h1>
      <div className="row">
      <div className="col-sm-4">
        <img width="300px" height="250px"  src="./puppies/shiba.jpg" alt="puppy1" />
        <p className="aboutdesc">Rigorous training</p>
      </div>
      <div className="col-sm-4">
        <img width="300px" height="250px"  src="./puppies/doodle.jpg" alt="puppy2"  />
        <p className="aboutdesc">Weaponized Cuteness</p>
      </div>
        <div className="col-sm-4">
        <img width="300px" height="250px" src="./puppies/sampledog.jpg" alt="puppy3" />
        <p className="aboutdesc">Extreme conditioning</p>
      </div>
    </div>
   

  </div>
  );
}
export default About;
