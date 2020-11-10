import React from "react";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
    <div className="container-fluid innerpage">
      <div className="text-center">
         <h1 className="puppyname">Good pups are raised by good hoomans</h1><img
          className="aboutimage img-fluid "
          src="./assets/aboutimages/familywhite.jpg"
          alt="JYMR family "
        />
       <h3 className="text-center puppyname">JYMR doodles</h3>
       <div className="row">
         <div className='col'></div>
         <div className="col-lg-8 text-center">
           
<p className="text-center breedinfo">Growing up in the country brought about unique opportunities in owning
          and raising animals on both the farm and in our homes. Every year
          there is a new wave of babies of all shapes and sizes born on the farm
          and with them comes new lessons to learn and increasing
          responsibilities. With over 20 years experience being raised in a
          hobby breeding home we easily found our vision for what we wanted our
          JYMR Breeding Program to look like and how we felt it to run.</p>
<img src="./assets/aboutimages/familycar.jpg" className="img-fluid"></img></div>

<div className='col'></div>
       </div>
      </div>
      
    </div>
  );
}
export default About;
