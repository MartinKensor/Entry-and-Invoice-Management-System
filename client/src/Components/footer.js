import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="foot">
          Copyright &copy; {new Date().getFullYear()} Simran Gupta
        </div>
      </div>
    );
  }
}

export default Footer;
