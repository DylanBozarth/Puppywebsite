
import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";


class RainbowBridge extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("aa");
      }
    };
    M.Carousel.init(this.Carousel, options);

    //Instance Plugin
    // let instance = M.Carousel.getInstance(this.Carousel);
    // instance.next(2);
  }

  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
        <a className="carousel-item">
          
          <img alt="1" src={'./puppies/shiba.jpg'} />
        </a>
        <a className="carousel-item">
          
          <img alt="1" src={'./puppies/shiba.jpg'} />
        </a>
        <a className="carousel-item">
          
          <img alt="1" src={'./puppies/shiba.jpg'} />
        </a>
        <a className="carousel-item">
          
          <img alt="1" src={'./puppies/shiba.jpg'} />
        </a>
        <a className="carousel-item">
          
          <img alt="1" src={'./puppies/shiba.jpg'} />
        </a>
        <a className="carousel-item">
          
          <img alt="1" src={'./puppies/shiba.jpg'} />
        </a>
        
      </div>
    );
  }
}
  
export default RainbowBridge;