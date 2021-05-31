import React, {useState} from 'react';
import useTitle from "../hooks/useTitle";
import Carousel from 'react-elastic-carousel';
import {
  
  NavLink
 
} from "reactstrap";
export const NewPups = () => {
    useTitle("Your Next Dog");
     
    const [jawDropper, setJaw] = useState([
        {
        name: "Honey",
            description: "",
            image: "./currentpuppies/jawDropper/honey.jpg"
          },
          {
            name: "Hanky",
            description: "",
            image: "./currentpuppies/jawDropper/hanky.jpg"
          },
          {
            name: "Harmony",
            description: "",
            image: "./currentpuppies/jawDropper/harmony.jpg"
          },
          {
            name: "Heart",
            description: "",
        image: "./currentpuppies/jawDropper/heart.jpg"
          },
          {
            name: "Hero",
            description: "",
            image: "./currentpuppies/jawDropper/hero.jpg"
          },
          {
            name: "Hershey",
            description: "",
            image: "./currentpuppies/jawDropper/hershey.jpg"
          },
          
          {
            name: "Hugs",
            description: "",
            image: "./currentpuppies/jawDropper/hugs.jpg"
          },
          {
            name: "Hermosa",
            description: "Reserved",
            image: "./currentpuppies/jawDropper/hermosa.jpg"
          },
          {
            name: "Hunk",
            description: "",
            image: "./currentpuppies/jawDropper/hunk.jpg"
          }
    ])
   
    return(
        <div className="innerpage container-fluid puppypage">
           <h3 className="text-center puppyname">Featured Puppy</h3>
           <Carousel itemsToShow={1}>
             <img src="./currentpuppies/heartattack/harmony.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/heartattack/harmony2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/heartattack/harmony3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/heartattack/harmony4.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/heartattack/harmony5.jpg" className="homecard frame img-fluid" alt="puppy"></img>
           </Carousel>
           <h4 className="text-center puppyname">Harmony from the Heart Attack doods!</h4>
           <br />
           <h3 className="text-center puppyname">Featured litter</h3>
    <div className="theme text-center"><img alt="labradoodles" src="./featuredPups/bernedoodles/chloeandgus.jpg" className="img-fluid homecard frame"></img></div> 
    {/*<h3 className="text-center puppyname">Puppies are unnamed as of 4/23</h3> */}
    
<div className="puppyname puppytitle text-center">Jaw Dropper Doods! <br /> F1B mini bernedoodles</div>
<div className="row">
  <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jade1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jade2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jade3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  >Jade <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jaxx1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jaxx2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jaxx3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Jaxx <br />
           Available</h4></div>
    </div>
    </div>
    )
}