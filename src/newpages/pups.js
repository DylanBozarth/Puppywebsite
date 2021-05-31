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
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jena1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jena2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jena3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Jena <br />
           Reserved</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jara1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jara2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jara3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Jara <br />
           Reserved</h4></div>
           
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jose1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jose2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jose3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Jose <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/juan1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juan2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juan3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Juan <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/judd1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/judd2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/judd3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Judd <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/juli1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juli2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juli3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Juli <br />
          Available</h4></div>
          <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/joni1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/joni2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/joni3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4>Joni <br />
           Reserved</h4></div>
    </div>
    </div>
    )
}