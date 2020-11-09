import React from 'react';


function Kenburns() {
    return(
    <div className="kenburns">
      
     
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/firstday.JPG)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/bluebow.JPG)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/flower.jpg)" }}
        ></div><div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/headshot.jpg)" }}
        ></div>
        
      </div>
</div>
    )
}
export default Kenburns