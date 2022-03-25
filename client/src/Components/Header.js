import React, { Component } from "react";
import "../css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
          <div className="nav-title">Entry Management</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/checkin">CheckIn</a>
          <a href="/checkout">CheckOut</a>
          <a href="/logbook">Logbook</a>
        </div>
      </div>
    );
  }
}
export default Header;
