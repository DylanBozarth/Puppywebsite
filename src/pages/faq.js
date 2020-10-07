import React from "react";
import Collapsible from "react-collapsible";
function FAQ() {
  return (
    <div className=" answerpage  innerpage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            
          </div>
          <div className="col-lg-4">
            <h1 className="FAQtitle">Frequently Asked Questions</h1>
            <Collapsible  trigger="Will these dogs be cute? "  >
              <p className="puppysubtitle">Oh man, you have no idea. The cutest dogs, let me tell you. --Michelle </p>
            
            </Collapsible>
            <Collapsible trigger="Do they play fetch "  >
              <p className="puppysubtitle">Yes. </p>
            
            </Collapsible>
            <Collapsible  trigger="Will the dog love me unconditionally?"   >
              <p className="puppysubtitle">Yes, or your money back.</p>
            
            </Collapsible>
          </div>
          <div className="col-lg-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
