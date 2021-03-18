import React, {useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "reactstrap";

export const Application = () => {
  return( 

    <div className="form container-fluid ">
    <h1 className="formtitle">Puppy application</h1>
    <h4 className="formtitle">
      Please fill out an application if you would like to place a deposit to
      reserve a spot on our priority waiting list for your new puppy!
      Deposits are $500 and will be added to your final purchase price. If
      you have questions please CONTACT US!
    </h4>
    <NavLink href="/puppycontract" className="contractlink">
      View Puppy Contract
    </NavLink>
    <form
      
    >
      <div className="forminputs ">
        <div className="formsection">
          <h3 className="formtitle">Your Contact information</h3>
          <label className="formtitle">Name:</label>
          <input type="name" name="Name" />

          <label className="formtitle">Phone:</label>
          <input type="number" name="Phone Number" />
          <label className="formtitle">Email</label>
          <input type="text" name="Email" />
        </div>
        <div className="formsection">
          <h3 className="formtitle">Your location </h3>
          <label className="formtitle">City</label>
          <input type="text" name="City" />
          <label className="formtitle">Address</label>
          <input type="text" name="Address" />
          <label className="formtitle">State</label>
          <input type="text" name="State" />
          <label className="formtitle">Zip code</label>
          <input type="number" name="Zip code" />
        </div>
        <div className="formsection"></div>
      </div>
      <div className="formsection">
        <h3 className="formtitle">The puppy</h3>
        <label className="formtitle">
          <h6>Desired breed (if any)</h6>
          <div className="radio container-fluid">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="Goldendoodle Preference"
              />
              <p className="checkbox">Goldendoodle</p>
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="English Goldendoodle Preference"
              />
              <p className="checkbox">English Goldendoodle</p>
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="Labradoodle Preference"
              />
              <p className="checkbox">Labradoodle</p>
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="Poodle preference"
              />
              <p className="checkbox">Poodle</p>
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="Other Preference"
              />
              <p className="checkbox">Other</p>
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                name="No breed preference"
              />
              <p className="checkbox">No preference</p>
            </label>
          </div>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">Desired dog size</h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Up to 25 lbs "
          />
          <p className="checkbox">Up to 25 lbs (Micro Mini) </p>
        </label>
        <label>
          <input type="checkbox" className="checkbox" name="20-35 lbs" />
          <p className="checkbox">20-35 lbs (mini)</p>
        </label>
        <label>
          <input type="checkbox" className="checkbox" name="30-45 lbs" />
          <p className="checkbox">30-45 lbs (Moyan) </p>
        </label>
        <label>
          <input type="checkbox" className="checkbox" name="45+ lbs" />
          <p className="checkbox">45+ lbs (Standard) </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="No dog size preference"
          />
          <p className="checkbox">No preference </p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">Generation interested in</h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="First generation preference"
          />
          <p className="checkbox">F1 (first gen) </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Second generation preference"
          />
          <p className="checkbox">F1B (second gen) </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Multi-generation preference"
          />
          <p className="checkbox">Multi-generational </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="No generation preference"
          />
          <p className="checkbox">No preference </p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">Puppy Gender</h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Male Puppy preference"
          />
          <p className="checkbox">Male </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Female puppy preference"
          />
          <p className="checkbox">Female</p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="No Gender preference"
          />
          <p className="checkbox">No Preference</p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">Do you have a color preference?</h6>
        <label>
          <textarea
            type="text"
            rows="2"
            cols="25"
            name="Color Preference"
            placeholder={"If so, describe what color here"}
          ></textarea>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="No color preference"
          />
          <p className="checkbox">No color preference</p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">Purpose of the Adoption</h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Companion purpose"
          />
          <p className="checkbox">Companionship </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Service purpose"
          />
          <p className="checkbox">Service</p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Therapy purpose"
          />
          <p className="checkbox">Therapy</p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Breeding purpose"
          />
          <p className="checkbox">Breeding</p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">Energy level</h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Low to medium energy preference"
          />
          <p className="checkbox">Low to medium energy </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="High energy preference"
          />
          <p className="checkbox">Medium to high energy</p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">
          We believe training is crucial to creating a well rounded Doodle. <br /> 
          How would you like to train your puppy?
        </h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Wants extended board and train with JYMR"
          />
          <p className="checkbox">I'd like to arrange for an extended board and train with JYMR Doodles.</p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Wants online puppy training course. "
          />
          <p className="checkbox">I'm interested in an all inclusive online puppy training course. </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Wants to train the dog themself. "
          />
          <p className="checkbox">
            I would to train the puppy myself or use a trainer local to me. 
          </p>
        </label>
       
      </div>
      <div className="formsection">
        <h6 className="formtitle">
          Will you need shipping within the United states?
        </h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Will require shipping"
          />
          <p className="checkbox">I plan on picking my puppy up in person. </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Need a flight nanny to deliver puppy"
          />
          <p className="checkbox">I would like to have a flight nanny deliver my puppy to an airport near me.</p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Wants to fly to Salt lake city and pick up"
          />
          <p className="checkbox">I would like to fly into Salt Lake City airport and pick up my puppy.</p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Needs ground transport."
          />
          <p className="checkbox">I would like my puppy shipped to me via Cargo or Ground Transport.</p>
        </label>
        <textarea
        type="text"
        rows="4"
        cols="35"
        cd
        name="Airports near customer" 
        placeholder="Please list 2 airports near you">

        </textarea>
      </div>
      <div className="formsection">
        <h6 className="formtitle">
          How long are you willing to wait for your puppy
        </h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Willing to wait up to one year"
          />
          <p className="checkbox">
            I will wait until the perfect puppy becomes available Up to a
            year{" "}
          </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Wants puppy ASAP"
          />
          <p className="checkbox">I want my puppy ASAP!</p>
        </label>
      </div>
      <div className="formsection">
        <h6 className="formtitle">
          Does anyone in your family have allergies?{" "}
        </h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Severe allergies"
          />
          <p className="checkbox">Severe allegies </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Mild allergies"
          />
          <p className="checkbox">Mild allergies</p>
        </label>
        <label>
          <input type="checkbox" className="checkbox" name="No allergies" />
          <p className="checkbox">No allergies</p>
        </label>
      </div>

      <div className="formsection">
        <h6 className="formtitle">
          Are you willing and able to provide a new puppy/dog with optimal
          health care, nutrition, and exercise? Including Grooming and
          keeping up with regular brushing?{" "}
        </h6>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="Promises to treat the dog well"
          />
          <p className="checkbox">Yes </p>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            name="does NOT promise to treat the dog well "
          />
          <p className="checkbox">No</p>
        </label>
      </div>
      <div className="">
        <textarea
          type="text"
          rows="4"
          cols="35"
          name="Family info"
          placeholder={"Tell us about your family!"}
        ></textarea>
        <textarea
          type="text"
          rows="4"
          cols="35"
          cd
          name="Comments or questions"
          placeholder={"Comments or questions"}
        ></textarea>
      </div>
      
    </form>
  </div>
  )
}

  
   
    