import React, {useState} from 'react';
import useTitle from "../hooks/useTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const NewPups = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    useTitle("Your Next Dog");
     
    const [heartattack, setHeartAttack] = useState([
        {
        name: "Honey",
            description: "",
            image: "./currentpuppies/heartattack/honey.jpg"
          },
          {
            name: "Hanky",
            description: "",
            image: "./currentpuppies/heartattack/hanky.jpg"
          },
          {
            name: "Harmony",
            description: "",
            image: "./currentpuppies/heartattack/harmony.jpg"
          },
          {
            name: "Heart",
            description: "",
        image: "./currentpuppies/heartattack/heart.jpg"
          },
          {
            name: "Hero",
            description: "",
            image: "./currentpuppies/heartattack/hero.jpg"
          },
          {
            name: "Hershey",
            description: "",
            image: "./currentpuppies/heartattack/hershey.jpg"
          },
          
          {
            name: "Hugs",
            description: "",
            image: "./currentpuppies/heartattack/hugs.jpg"
          },
          {
            name: "Hermosa",
            description: "Reserved",
            image: "./currentpuppies/heartattack/hermosa.jpg"
          },
          {
            name: "Hunk",
            description: "",
            image: "./currentpuppies/heartattack/hunk.jpg"
          }
    ])
   
    return(
        <div className="innerpage container-fluid">
            <div className="puppyname puppytitle text-center">Lily and Asher's <br /> Heart attack doods!</div>
<div className="row">
    
    {heartattack
        
        .map((heartattack) => (
          <div className="col-sm-4" key={heartattack.name}>
            <img
              className="homecard frame img-fluid"
              src={heartattack.image}
              alt="goldendoodle"
            />
            <h1 className="puppyname">{heartattack.name}</h1>

            <p className="puppysubtitle">{heartattack.description}</p>
          </div>
        ))}
   
     
     
      
    </div>
    <div className="theme text-center"><img alt="labradoodles" src="./featuredPups/bernedoodles/chloeandgus.jpg" className="img-fluid homecard frame"></img></div> 
    <h3 className="text-center puppyname">Puppies are unnamed as of 4/23</h3>
    <Slider {...settings}>
      <div>
          <img src="./featuredPups/bernedoodles/boys1.jpg" className="image-fluid homecard frame" alt="puppy"></img>
        <p>Boy</p>
      </div>
      
    </Slider>
    </div>
    )
}