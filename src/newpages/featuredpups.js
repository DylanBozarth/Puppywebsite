import React from 'react'

import Carousel from 'react-elastic-carousel'
export const Featured = () => {
    return(
        <div className="innerpage container-fluid ">
             <div className="theme text-center"><img alt="labradoodles" src="./featuredPups/bernedoodles/chloeandgus.jpg" className="img-fluid homecard frame"></img></div> 
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
        </div>
    )
}