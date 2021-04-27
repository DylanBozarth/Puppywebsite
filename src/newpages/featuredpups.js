import React from 'react'
import {
    
    NavLink
   
  } from "react-router-dom";
import Carousel from 'react-elastic-carousel'
export const Featured = () => {
    return(
        <div className="innerpage container-fluid ">
            <h3 className="text-center puppyname puppytitle">Introducing Bernedoodles!</h3>
            <h5 className="text-center puppyname puppytitle">The Jaw Dropper Doods </h5>
             <div className="theme text-center"><img alt="labradoodles" src="./featuredPups/bernedoodles/chloeandgus.jpg" className="img-fluid homecard frame"></img></div> 
             <h5 className="text-center puppyname puppytitle">Names are to be decided </h5>
            
            <Carousel itemsToShow={1}>
 <div><img src="./featuredPups/bernedoodles/boys1.jpg" className="  img-fluid" alt="dog"></img> <p className="text-center puppyname puppytitle">Boy</p></div>
 <div><img src="./featuredPups/bernedoodles/boys2.jpg" className=" img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Boy</p></div>
 <div><img src="./featuredPups/bernedoodles/boys3.jpg" className=" img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Boy</p></div>
 <div><img src="./featuredPups/bernedoodles/girls1.jpg" className=" img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls2.jpg" className=" img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls3.jpg" className=" img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls4.jpg" className=" img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls5.jpg" className="img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
</Carousel>
<h5 className="text-center puppyname puppytitle">Some other special doods!</h5>
<div className="row">

    <div className="col-sm-6">
    <h5 className="text-center puppyname puppytitle">Harmony </h5>
    <Carousel itemsToShow={1}>
 <div><img src="./featuredPups/harmony.jpg" className="  frame  img-fluid" alt="dog"></img></div>
 <div><img src="./featuredPups/harmony2.jpg" className="  frame img-fluid" alt="dog"></img></div>
 
</Carousel>
    </div>
    <div className="col-sm-6">
    <h5 className="text-center puppyname puppytitle">Heart</h5>
    <Carousel itemsToShow={1}>
    
 <div><img src="./featuredPups/heart1.jpg" className=" frame  img-fluid" alt="dog"></img></div>
 <div><img src="./featuredPups/heart2.jpg" className=" frame img-fluid" alt="dog"></img></div>
 <div><img src="./featuredPups/heart3.jpg" className=" frame img-fluid" alt="dog"></img></div>
 
 
</Carousel>
    </div>
</div>
<div className="col-sm-6">
    <h5 className="text-center puppyname puppytitle">Hero</h5>
    <Carousel itemsToShow={1}>
    
 <div><img src="./featuredPups/hero/hero1.jpg" className=" frame  img-fluid" alt="dog"></img></div>
 <div><img src="./featuredPups/hero/hero2.jpg" className=" frame img-fluid" alt="dog"></img></div>
 <div><img src="./featuredPups/hero/hero3.jpg" className=" frame img-fluid" alt="dog"></img></div>
 <div><img src="./featuredPups/hero/hero4.jpg" className=" frame img-fluid" alt="dog"></img></div>
 
 
</Carousel>
    </div>
<div className="text-center"><NavLink to="/application" className="text-center puppyname  puppytitle">Reserve your puppy now!</NavLink></div>
        </div>
    )
}