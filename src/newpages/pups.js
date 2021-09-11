import React, {useState} from 'react';
import useTitle from "../hooks/useTitle";
import Carousel from 'react-elastic-carousel';
import {
  
  NavLink
 
} from "react-router-dom";
export const NewPups = () => {
    useTitle("Your Next Dog");
     
   
   
    return(
        <div className="innerpage container-fluid puppypage">
          <div className="puppyname puppytitle text-center">Plantatious Doods<br /> F1b Mini/Moyan English Goldendoodles</div>
          <div className="row">
            <div className="col-sm-4">
          <Carousel itemsToShow={1} className=''>
             <img src="./currentpuppies/platatousdoods/pumpkin.jpg" className="frame img-fluid" alt="puppy"></img>
           </Carousel> <h4  className="puppyname">Pumpkin <br />
           Available</h4> </div>
           <div className="col-sm-4">
           <Carousel itemsToShow={1} className=''>
             <img src="./currentpuppies/platatousdoods/peach.jpg" className=" frame img-fluid" alt="puppy"></img>
             
           </Carousel>  <h4  className="puppyname">Peach <br />
           Available</h4></div>
           <div className="col-sm-4">
           <Carousel itemsToShow={1} className=''>
             <img src="./currentpuppies/platatousdoods/pecan.jpg" className=" frame img-fluid" alt="puppy"></img>
           </Carousel> <h4  className="puppyname">Pecan <br />
           Available</h4> </div>
           <div className="col-sm-4">
           <Carousel itemsToShow={1} className=''>
             <img src="./currentpuppies/platatousdoods/pepper.jpg" className=" frame img-fluid" alt="puppy"></img>
           </Carousel> <h4  className="puppyname">Pepper <br />
           Available</h4> </div>
           <div className="col-sm-4">
           <Carousel itemsToShow={1} className=''>
             <img src="./currentpuppies/platatousdoods/peanut.jpg" className="frame img-fluid" alt="puppy"></img>
           </Carousel>  <h4  className="puppyname">Peanut <br />
           Available</h4></div>
   </div>
    {/*<h3 className="text-center puppyname">Puppies are unnamed as of 4/23</h3> */}
    
<div className="puppyname puppytitle text-center">Jaw Dropper Doods! <br /> F1B mini bernedoodles</div>
<div className="row">
  <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jade1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jade2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jade3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Jade <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jaxx1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jaxx2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jaxx3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Jaxx <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jena1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jena2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jena3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Jena <br />
           Reserved</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jara1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jara2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jara3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Jara <br />
           Reserved</h4></div>
           
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/jose1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jose2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/jose3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Jose <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/juan1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juan2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juan3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Juan <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/judd1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/judd2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/judd3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Judd <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/juli1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juli2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/juli3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Juli <br />
          Available</h4></div>
          <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/jawDropper/joni1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/joni2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/jawDropper/joni3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
            
           </Carousel> 
           <h4  className="puppyname">Joni <br />
           Reserved</h4></div>
    </div>
    <br />
    <br />
    <h3 className="puppyname text-center">Irresistable doods! <br /> 
    F1b Moyan Goldendoodles</h3>
    <div className="row">
    <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/irresistable/ish.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/ish2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/ish3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
           </Carousel> 
           <h4  className="puppyname">Ish <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/irresistable/issac1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/issac2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/issac3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
           </Carousel> 
           <h4  className="puppyname">Issac <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/irresistable/ivy1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/ivy2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/ivy3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
           </Carousel> 
           <h4  className="puppyname">Ivy <br />
           Available</h4></div>
           <div className="col-sm-4">
<Carousel itemsToShow={1}>
             <img src="./currentpuppies/irresistable/izzy1.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/izzy2.jpg" className="homecard frame img-fluid" alt="puppy"></img>
             <img src="./currentpuppies/irresistable/izzy3.jpg" className="homecard frame img-fluid" alt="puppy"></img>
           </Carousel> 
           <h4  className="puppyname">Izzy <br />
           Available</h4></div>
    </div>
    <h3 className="text-center puppyname puppytitle">The K litter!</h3>

      <h5 className="text-center puppyname puppytitle">
        Names are to be decided{" "}
      </h5>
      <div className="row">
        <div className="col-sm-2"></div>
        <Carousel itemsToShow={1} className="col-sm-8">
          <div>
            <img
              src="./currentpuppies/klitter/1.jpg"
              className="homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/2.jpg"
              className=" homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/3.jpg"
              className="homecard  img-fluid  "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/4.jpg"
              className=" homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/5.jpg"
              className="homecard  img-fluid  "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/6.jpg"
              className="homecard  img-fluid  "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
          <div>
            <img
              src="./currentpuppies/klitter/7.jpg"
              className=" homecard  img-fluid "
              alt="dog"
            ></img>{" "}
            <p className="text-center puppyname puppytitle"></p>
          </div>
        </Carousel>
</div>
        <div className="col-sm-2"></div>
    <h2 className="text-center"><NavLink to="/application" className="puppyname text-center">Get me my puppy now!</NavLink></h2>
    </div>
    )
}