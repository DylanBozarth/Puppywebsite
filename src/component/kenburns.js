import React from 'react';


function Kenburns() {
    return(
    <div className="kenburns">
      
     
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../slideshow/pinkbow.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../slideshow/purple.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../slideshow/suitcase.jpg)" }}
        ></div><div
          className="slideshow-image"
          style={{ backgroundImage: "url(../slideshow/stare.jpg)" }}
        ></div>
        
      </div>
</div>
    )
}
export default Kenburns