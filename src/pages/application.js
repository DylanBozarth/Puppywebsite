import React from "react";

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
    this.setState({});
  };
  render() {
    const { status } = this.state;
    return (
      <div className="form container-fluid">
        <h1 className="formtitle">JYMR Doodles</h1>
        <h4 className="formtitle">
          Please fill out an application if you would like to place a deposit to
          reserve a spot on our priority waiting list for your new puppy!
          Deposits are $500 and will be added to your final purchase price. If
          you have questions please CONTACT US!
        </h4>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xoqpajbk"
          method="POST"
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
            <div className="formsection">

            </div>
          </div>
          <div className="formsection">
            <h3 className="formtitle">The puppy</h3>
            <label className="formtitle">
              <h6>Desired breed (if any)</h6>
              
            </label>
            <input type="text" name="Preferred breed" />
            <label className="formtitle">
              <h6>Size of dog interested in:</h6>
             
            </label>
            <input type="text" name="Dog size" />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </form>
      </div>
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
