
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function RainbowBridge() {
  return (
    <AwesomeSlider  className="slidermaster">
    <div><div className="slidertab"> 
          <h1 className="slidertext">Molly 1955-2019</h1></div>
          <img
            className=""
            
            src="./puppies/shiba.jpg"
          /></div>
    <div><div className="slidertab"> 
          <h1 className="slidertext">Steve 1955-2019</h1></div>
          <img
            className=""
            
            src="./puppies/shiba.jpg"
          /></div>
    <div><div className="slidertab"> 
          <h1 className="slidertext">Craig 1955-2019</h1></div>
          <img
            className=""
            
            src="./puppies/shiba.jpg"
          /></div>
    <div><div className="slidertab"> 
          <h1 className="slidertext">Ramses II 1955-2019</h1></div>
          <img
            className=""
            
            src="./puppies/shiba.jpg"
          /></div>
  </AwesomeSlider>
  )
}
export default RainbowBridge;