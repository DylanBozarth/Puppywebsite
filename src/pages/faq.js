import React from "react";
import Collapsible from "react-collapsible";
import {
  
  NavLink
 
} from "reactstrap";
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
          <div className="col-lg-4">
            <div>
              <Collapsible trigger="What comes with my puppy?">
                <p className="answersubtitle">
                  <li>
                    Comprehensive vet check with fecal after 7 weeks of age
                  </li>
                  <li>Dewormed every 2 weeks</li>
                  <li>NeoPar Vaccine at 4 and 6 weeks. (Parvo Only Vaccine)</li>
                  <li>First 5way Puppy Vaccine at 8 weeks </li>
                  <li>
                    Medical records including all dewormings, vaccinations and
                    vet checks.
                  </li>
                  <li>Microchip with Lifetime Registration</li>
                  <li>Puppy Swag Bag</li>
                  <li>Access to our Password Protected Training Portal</li>
                  <li>Lifetime Support from JYMR Doodles</li>
                </p>
              </Collapsible>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <div>
              <Collapsible trigger="What is the process to get onto the Waiting List? ">
                <p className="answersubtitle">
                  The quick answer:
                  <li>
                  Fill out our Puppy Request form found HERE. 
                  </li>
                  <li>Place the $500 deposit (non-refundable) via Venmo @jymrdoodles Last four digits: 9847</li>
                  <li>Anxiously watch our Instagram and Facebook pages and wait for us to contact you about your upcoming puppy’s litter.</li>
                  <li> Full Payment is due at time the final puppy choices have been made. Approx: 6-7wks of age.</li>
                  <li>
                  All puppies receive their comprehensive vet check and cleared to go to their new homes at 8 weeks.

                  </li>
                  
                </p>
              </Collapsible>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <div>
              <Collapsible trigger="What are the MUST HAVES when I bring home my puppy?">
                <p className="answersubtitle">
                 
                  Please visit our <NavLink href="/affliates">Recommendations Tab</NavLink> for links to all the products we recommend to our Puppy Families. 
                  
                </p>
              </Collapsible>
            </div>{" "}
          </div>
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
