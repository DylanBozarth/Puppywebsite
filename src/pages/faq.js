import React from "react";
import Collapsible from "react-collapsible";

import _ from "lodash";
function FAQPAGE({propdata}) {
  const Faq = _.get(propdata, "Faq", []);
  return (
    <div className=" answerpage  innerpage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            
          </div>
          <div className="col-lg-4">
            <h1 className="FAQtitle">Frequently Asked Questions</h1>
            {Faq.map((Faq) => (
            <div className=""  key={Faq.answer}>
             
             <Collapsible  trigger={Faq.question} >
              <p className="puppysubtitle">{Faq.answer} </p>
            
            </Collapsible>

            </div>
          ))}
    
           
          </div>
          <div className="col-lg-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQPAGE;
