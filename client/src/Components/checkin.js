import React, { Component } from "react";
import { Button } from "reactstrap";
import validator from "validator";
import "../css/home.css";

class checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest_name: "",
      guest_email: "",
      guest_number: "",
      host_name: "",
      host_email: "",
      host_number: ""
    };
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    if (
      validator.isEmail(this.state.guest_email) &&
      validator.isEmail(this.state.host_email) &&
      validator.isMobilePhone(this.state.guest_number, ["en-IN"]) &&
      validator.isMobilePhone(this.state.host_number, ["en-IN"])
    )
      this.submitForm();
    else alert("Complete all the fields");
  };

  submitForm = () => {
    fetch("http://localhost:3003/checkin", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res) alert(this.state.guest_name + " checked In Successfully");
        else alert("Couldn't check you in");
      })
      .catch(err => alert("Something went wrong!"));
  };

  render() {
    return (
      <div className="container form" style={{'padding-bottom':"40px"}}>
        <h1 f1 animated fadeIn w-100 w-third-ns ph3>Check IN</h1>
        <form>
          <h2 style={{ textAlign: "center" }}>
            <u>Visitor's Details</u>
          </h2>
          <label>Name:</label> &nbsp;
          <input
            type="text"
            name="guest_name"
            placeholder="Enter your name"
            onChange={this.changeHandler}
            required
          />
          <br></br>
          <label>Email:</label>&nbsp;&nbsp;
          <input
            type="email"
            name="guest_email"
            placeholder="Enter your email address"
            onChange={this.changeHandler}
          />
          <br></br>
          <label>Phone Number:</label>&nbsp;&nbsp;
          <input
            type="phone"
            name="guest_number"
            placeholder="Enter your Phone Number (+91)"
            onChange={this.changeHandler}
          />
          <br></br>
          <h2 style={{ textAlign: "center" }}>
            <u>Host's Details</u>
          </h2>
          <label>Name:</label>&nbsp;&nbsp;
          <input
            type="text"
            name="host_name"
            placeholder="Enter your name"
            onChange={this.changeHandler}
          />
          <br></br>
          <label>Email:</label>&nbsp;&nbsp;
          <input
            type="email"
            name="host_email"
            placeholder="Enter your email address"
            onChange={this.changeHandler}
          />
          <br></br>
          <label>Phone Number:</label>&nbsp;&nbsp;
          <input
            type="phone"
            name="host_number"
            placeholder="Enter your Phone Number (+91)"
            onChange={this.changeHandler}
          />
          <br></br>
          <Button className="submit" onClick={() => this.validateForm()}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default checkin;
