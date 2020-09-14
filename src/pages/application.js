
import React from "react";

import { Badge } from 'reactstrap';


export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      dogSize: "No preference",

    };
  }
setDogSize = () => {
  this.setState({ })
}
  render() {
    const { status } = this.state;
    return (
      <div className="form">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqpajbk"
        method="POST"
      >
        
  
        <label className="formtitle">Name:</label>
        <input type="name" name="Name" />
        <label className="formtitle">Address</label>
        <input type="text" name="Address" />
        <label className="formtitle">Phone:</label>
        <input type="text" name="Phone" />
        <label className="formtitle">Interested in:</label>
        <div className="checkboxes">
          <h3>What are you interested in? Select all that apply.</h3>
          <div className="leftboxes">
          <div className="radio ">
            <label>
              <input type="checkbox" className="checkbox" name="Big dog" />1 :
              Big dog
            </label>
            <label>
              <input type="checkbox" className="checkbox" name="Medium dog" />1 :
              Medium dog
            </label>
            <label>
              <input type="checkbox" className="checkbox" name="Small dog" />1 :
              Small pup
            </label>
            <label>
              <input type="checkbox" className="checkbox" name="No preference" />1 :
              No preference
            </label>
          </div>
          
         </div>
</div>
        <input type="text" name="Dog size"  />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form></div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}