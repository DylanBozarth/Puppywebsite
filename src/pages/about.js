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

    \<div>
    <img src='./assets/aboutimages/couple.jpg' className="img-fluid" width="300px" height="300px" />
<p className="abouttext right">Growing up in the country brought about unique opportunities in owning and raising animals on both the farm and in our homes. Every year there is a new wave of babies of all shapes and sizes born on the farm and with them comes new lessons to learn and increasing responsibilities. With over 20 years experience being raised in a hobby breeding home we easily found our vision for what we wanted our JYMR Breeding Program to look like and how we felt it to run. We found out early into our breeding career of long haired chihuahuas there are severe allergies in our family and a need for a Service Dog arose. Both these situations brought us back to the drawing board to yet again reformulate our plans. In 2007 we were introduced to our very first Standard Poodle, Royce and instantly fell head over heels in love with the breed. We then discovered Labradoodles and knew right away Doodles were going to be our calling. Over the next year we researched endlessly to learn as much as we could on Hybrid Doodles.</p></div>

<div>
    <img src='http://placehold.it/100x100' class="right"/>
</div>
<div class="clearfix">
    <img src='http://placehold.it/100x100'/>
</div>
<div>
    <img src='http://placehold.it/100x100' class="right"/>
</div>
    </div>
  );
}
export default About;
