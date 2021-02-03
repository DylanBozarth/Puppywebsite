import React from "react";
import useTitle from "../hooks/useTitle";

function About() {
  useTitle("Reputable Breeders");
  return (
    <div className="container-fluid innerpage aboutpage">
      <div className="text-center">
         
       <h3 className="text-center  jymrtitle">JYMR Doodles<br /></h3><p className="aboutinfo">Good Pups are Raised by Good Hoomans</p> 
       <div className="row">
         <div className='col'></div>
         <div className="col-lg-8 text-center">
           
<p className="text-center aboutinfo">Our Vision and Dream for what we wanted in our JYMR Breeding Program came easily due to Juan and
Michelle’s 30 plus years of combined breeding experience. Being raised in hobby breeding homes on farms, we
were given unique opportunities in owning and raising a variety of animals. We knew we wanted to provide
these same experiences for our own family and we current raise a variety of animals on our own little farm in
Orem, Utah. Each year a new wave of babies are born and with them come increasing responsibilities while
providing wonderful learning experiences to our family and opportunities for growth both personal and business
related.</p>
<img src="./assets/aboutimages/familycar.jpg" alt="family" className="img-fluid"></img></div>

<div className='col'></div>
       </div>
       <div className="row">
<div className="col-sm-6">

<img src="./assets/aboutimages/longhair.jpg"  alt="Dog" className="img-fluid"></img>
</div>

<div className="col-sm-6">
<p className="text-center aboutinfo">Early into our breeding career of long-haired Chihuahuas we discovered a few members of our family had
developed a list of severe allergies and another was in need of a Service Dog. Our “Why” in breeding suddenly
changed and we knew if we were able to find a breed of dog who could meet the needs of our family, we could
also help to provide the same for others. </p>
</div>


       </div>
       <div className="row">
         <div className="col-sm-6">
           <p className="aboutinfo text-center">
           In 2007, after researching breeds considered hypoallergenic, we acquired our very first Standard Poodle, Royce
and instantly fell head over heels in love with the breed. We then discovered Poodle Hybrids called
Labradoodles and we knew right away Doodles were our calling! Over the course of the next year we
researched endlessly to learn everything we possibly could on Hybrid Doodles. Finally, in 2008 JYMR Doodles
was born and with it our very first litter of English Labradoodles. Fast forward to today and we have expanded
to into include Poodles and English Goldendoodles of all sizes into our program with plans of adding a few
other Doodle Breeds in the near future.</p>
       </div>
       <div className="col-sm-6">
       <img src="./puppies/labradoodleicon.jpg"  alt="family" className="img-fluid"></img>
       </div>
       </div>
       <div className="row">
       <div className="col-sm-6">

<img src="./assets/aboutimages/familyporch.jpg "  alt="family" className="img-fluid"></img>
</div>

<div className="col-sm-6">
<p className="text-center aboutinfo">Juan and Michelle have 4 Amazing Earth-side children who have been a crucial part of our breeding program.
Each of our children are given the responsibility of raising a at least one breeding female of their own so they
can learn ALL aspects of responsible breeding, whelping and proper care of puppies while helping to run our
family business. <br />We truly believe allowing a child the opportunity of caring for a dog they can call their own,
they will grow to be more compassionate, loving and responsible adults. Aside from tending to our dogs and
farm, our family enjoys traveling all over the US and Mexico, camping and spending time in the beautiful
outdoors, watching movies of different genres, and pretty much doing anything where food is involved.
All our puppies are born and raised in our home. </p>
</div>
       </div>
       <div className="row">

<div className="col-sm-6"><p className="aboutinfo">We pride ourselves with ensuring we produce sound, quality
pups from genetically health tested parents. Each puppy leaves our program given the foundational skills,
confidence and love needed to allow for them to go in any direction; rather they continue their training with you
as a Service Dog, Emotional Support Animal, Therapy Dog or as a family member and the BEST Dood possible
in their forever Pet Home!</p></div>
       
       <div className="col-sm-4">
<img src="./assets/aboutimages/familyarmy.jpg"  alt="family" className="img-fluid "></img>
</div></div>
      </div>
      
    </div>
  );
}
export default About;
