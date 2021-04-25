import React, {useState} from 'react';
import useTitle from "../hooks/useTitle";
import Carousel from 'react-elastic-carousel'
export const NewPups = () => {
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
           

    <div className="theme text-center"><img alt="labradoodles" src="./featuredPups/bernedoodles/chloeandgus.jpg" className="img-fluid homecard frame"></img></div> 
    <h3 className="text-center puppyname">Puppies are unnamed as of 4/23</h3>
    <Carousel itemsToShow={1} className="carousel">
 <div><img src="./featuredPups/bernedoodles/boys1.jpg" className="homecard  img-fluid" alt="dog"></img> <p className="text-center puppyname puppytitle">Boy</p></div>
 <div><img src="./featuredPups/bernedoodles/boys2.jpg" className="homecard  img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Boy</p></div>
 <div><img src="./featuredPups/bernedoodles/boys3.jpg" className="homecard img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Boy</p></div>
 <div><img src="./featuredPups/bernedoodles/girls1.jpg" className="homecard  img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls2.jpg" className="homecard  img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls3.jpg" className="homecard  img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls4.jpg" className="homecard  img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
 <div><img src="./featuredPups/bernedoodles/girls5.jpg" className="homecard  img-fluid" alt="dog"></img><p className="text-center puppyname puppytitle">Girl</p></div>
</Carousel>
<br />
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
    </div>
    )
}