import React from "react";
import Collapsible from "react-collapsible";
import { NavLink } from "reactstrap";
import _ from "lodash";
function FAQPAGE({ propdata }) {
  const Faq = _.get(propdata, "Faq", []);
  return (
    <div className=" answerpage ">
      <div className="container">
        <h1 className="FAQtitle">Frequently Asked Questions</h1>
        <div className="">
          <p className="answersubtitle">
            Due to the Complexity of Dog Genetics, JYMR Doodles CANNOT GUARANTEE
            any of the following but we will our best to accommodate your
            desires for all the items below:
          </p>

          <li className="answersubtitle">
            The number of puppies or their genders born in a litter
          </li>
          <li className="answersubtitle">
            The colors or markings each puppy is born with
          </li>
          <li className="answersubtitle">
            Heights and Weights within each size category is only an estimate
            based on parent’s, grandparent’s and past puppies’ sizes. Outliers
            can and do happen where puppies fall outside of the anticipated size
            range
          </li>
          <li className="answersubtitle">
            Final adult coat and color can change based on which genes are
            passed down from the parents.
          </li>
          <li className="answersubtitle">
            Planned Studs or particular paired breeding until it takes place and
            pregnancy has been confirmed
          </li>
        </div>
        {/*  what can I feed my puppy? missing link and pawtree link under MUST HAVES*/}
        <div className="row">
          <div className="col-lg-4">
            <div>
              <Collapsible trigger="How do deposits work?">
                <p className="answersubtitle">
                  Once you have filled out our puppy application (Here) a $500
                  deposit is required in order to be placed on your desired
                  litter reservation list. Deposits are non-refundable but can
                  be transferred to another available puppy or litter for up to
                  two years. <br /> Deposits can be made via Venmo @jymrdoodles,
                  CashApp $jymrdoodles, Zelle 8016029847 or with Cash. <br /> We
                  no longer are able to accept Paypal or Checks. Once a deposit
                  is made you will be placed next in line on your desired
                  litter's reservation list and puppy picks are made in that
                  order. JYMR Doodles reserves the right to retain first pick of
                  any litter born.
                </p>
              </Collapsible>
            </div>{" "}
          </div>
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
              <Collapsible trigger="What should I feed my puppy?">
                <p className="answersubtitle">
                  All JYMR Doodles’ adults and puppies are fed a very high
                  quality, Nutrient Dense, All Natural, Holistic Food purchased
                  directly from our website. We offer a 5 year Genetic Health
                  Guarantee when our puppies are kept on pawTree dog food
                  purchased through the provided link to their site. We also
                  offer discounts on the final purchase price of your puppy
                  after you place your first order. We provide more information
                  to you when it is closer to your puppy pick up date. More
                  details can also be found{" "}
                  <NavLink href="https://www.pawtree.com/jymrdoodles/myrecommendation/Standard-Package?fbclid=IwAR1x9IKyAO0ojODicSbSXWO7305bY4A3jnFoJZvPQaAHLBcMmMnqhjZXhPY">
                    HERE.
                  </NavLink>
                </p>
              </Collapsible>
            </div>{" "}
          </div>
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

                  <li>Lifetime Support from JYMR Doodles</li>
                </p>
              </Collapsible>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <div>
              <Collapsible trigger="What are the MUST HAVES when I bring home my puppy?">
                <p className="answersubtitle text-center">
                  In the beginning puppies don’t need much more than their
                  hoomans to be happy and healthy. We are working to add direct
                  links to our recommended products on our Affiliates Page, but
                  in the meantime here is a list of the basics. We recommend you
                  wait until you bring your puppy home, get to know their
                  personality, they are further into their House Breaking and
                  Training before you go out and buy lots of things they may not
                  like or never use.
                  <br /> <br />
                  <NavLink href="https://www.pawtree.com/jymrdoodles/myrecommendation/Standard-Package?fbclid=IwAR1x9IKyAO0ojODicSbSXWO7305bY4A3jnFoJZvPQaAHLBcMmMnqhjZXhPY">
                    <li className="answersubtitle">
                      PawTree food and supplements (link)
                    </li>
                  </NavLink>
                  <li className="answersubtitle">
                    A Crate with Easy to Wash Bedding ie: Towels or Thin
                    Blankets
                  </li>
                  <li className="answersubtitle">Food and Water Bowl</li>
                  <li className="answersubtitle">Collar and Leash</li>
                  <li className="answersubtitle">A Few Chew Toys</li>
                  <li className="answersubtitle">
                    A Plan for Training Your Puppy
                  </li>
                  <li className="answersubtitle">
                    Metal Comb and Slicker Brush
                  </li>
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
