import React from "react";
import Collapsible from "react-collapsible";

import _ from "lodash";
function FAQPAGE({ propdata }) {
  const Faq = _.get(propdata, "Faq", []);
  return (
    <div className=" answerpage ">
      <div className="container">
         <h1 className="FAQtitle">Frequently Asked Questions</h1><div className="row">
         

          {Faq.map((Faq) => (
            <div className="col-lg-4">
              <div  key={Faq.answer}>
                <Collapsible trigger={Faq.question}>
                  <p className="answersubtitle">{Faq.answer} </p>
                </Collapsible>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQPAGE;
