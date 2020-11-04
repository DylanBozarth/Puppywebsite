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
      \
      <div>
        <img
          src="./assets/aboutimages/couple.jpg"
          className="img-fluid"
          width="300px"
          height="300px"
        />
        <p className="abouttext right">
          Growing up in the country brought about unique opportunities in owning
          and raising animals on both the farm and in our homes. Every year
          there is a new wave of babies of all shapes and sizes born on the farm
          and with them comes new lessons to learn and increasing
          responsibilities. With over 20 years experience being raised in a
          hobby breeding home we easily found our vision for what we wanted our
          JYMR Breeding Program to look like and how we felt it to run.
        </p>
      </div>
      <div>
        <img
          src="./assets/aboutimages/longhair.jpg"
          className="right img-fluid"
          width="300px"
          height="300px"
        />
        <p className="abouttext left">
          {" "}
          We found out early into our breeding career of long haired chihuahuas
          there are severe allergies in our family and a need for a Service Dog
          arose. Both these situations brought us back to the drawing board to
          yet again reformulate our plans. In 2007 we were introduced to our
          very first Standard Poodle, Royce and instantly fell head over heels
          in love with the breed. We then discovered Labradoodles and knew right
          away Doodles were going to be our calling. Over the next year we
          researched endlessly to learn as much as we could on Hybrid Doodles.
        </p>
      </div>
      <div class="clearfix">
        <img src="./puppies/goldendoodleicon.jpg" className="img-fluid" width="300px" height="300px" />
        <p className="abouttext right">
          Then in 2008, JYMR Doodles was born and with it our very first litter
          of English Labradoodles. Fast forward to today and we have grown to
          include English Goldendoodles and Poodles along with plans of adding a
          few more surprises in the near future. Juan and Michelle have 4
          amazing earth-side children who have been an intricate part of our
          breeding program from the start. Each child has had the opportunity of
          raising a breeding female of their own, learning every aspect of
          raising, breeding and whelping. <br /> <br /> We truly believe by allowing a child
          the opportunity to care for a dog of their own they grow up to be more
          compassionate, responsible and loving adults. Aside from tending to
          our dogs and farm, our family enjoys traveling all over the Us and
          Mexico, spending time in the beautiful outdoors, watching movies of
          all genres and doing anything related to food. All our puppies are
          born and raised in our home. We pride ourselves with ensuring we can
          produce sound, quality pups from genetically health tested parents,
          who have been given the foundational skills, confidence and love
          needed to become a Service Dog, Emotional Support Animal or to be the
          best Dood possible in their forever Pet Home!
        </p>
      </div>
      
    </div>
  );
}
export default About;
