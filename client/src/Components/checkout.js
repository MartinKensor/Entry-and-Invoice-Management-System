import React, { Component } from "react";
import validator from "validator";
import { Button } from "reactstrap";
import "../css/home.css";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guest_email: ""
    };
  }

  changeHandler = event => {
    let value = event.target.value;
    this.setState({ guest_email: value });
  };

  validateForm = () => {
    if (validator.isEmail(this.state.guest_email)) this.submitForm();
    else alert("Enter the Email Address");
  };

  submitForm() {
    console.log(this.state);
    fetch("http://localhost:3003/checkout", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      const a = res.json().then(data => window.alert(data.message));
    });
  }

  render() {
    return (
      <div className="container form form1">
        <div style={{ marginTop: "7%" }}>
          <h1>Check Out</h1>
          <form>
            <label>Visitor's Email:</label>&nbsp;&nbsp;
            <input
              style={{ marginLeft: "0px" }}
              type="email"
              name="guest_email"
              placeholder="Enter your email"
              onChange={this.changeHandler}
            />
            <br></br>
            <Button className="submit" onClick={() => this.validateForm()}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckOut;
