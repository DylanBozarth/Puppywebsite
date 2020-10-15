import React from "react";
import Collapsible from "react-collapsible";

import _ from "lodash";
function FAQPAGE({ propdata }) {
  const Faq = _.get(propdata, "Faq", []);
  return (
    <div className=" answerpage ">
      <div className="container">
        <h1 className="FAQtitle">Frequently Asked Questions</h1>
        <div className="centertext2">
          <p>
            We are unable to control Mother Nature and the timing of heat cycles
            on our girls. Due to this, estimated litters may be born 3-6 months
            earlier or later than planned.
          </p>
          <p>Prices subject to change prior to placing your deposit</p>
          <p>
            We are open to placing our puppies in breeding homes for a nominal
            fee. Please email us directly if you would like to buy a puppy for
            breeding and we can discuss the options.{" "}
          </p>
        </div>
        <div className="row">
          {Faq.map((Faq) => (
            <div className="col-lg-4">
              <div key={Faq.answer}>
                <Collapsible trigger={Faq.question}>
                  <p className="answersubtitle">{Faq.answer} </p>
                </Collapsible>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="centertext2">
        <p>
          JYMR Doodles occasionally keeps back puppies to continue our breeding
          program. We reserve the right to have first pick of ALL litters born.
        </p>
        <p>
          We reserve the right to deny the sell of our puppies to anyone we do
          not feel comfortable with.
        </p>
      </div>
    </div>
  );
}
export default FAQPAGE;
