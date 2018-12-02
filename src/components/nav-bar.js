import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Error from "../resources/noun_Error_89607_000000.svg";
class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar-container">
        <i className="fa fa-info-circle fa-6" aria-hidden="true" />
        <i class="fa fa-bed" aria-hidden="true" />
          <i class="fa fa-comment" aria-hidden="true" />

        <i class="fas fa-utensils" />

        <i class="fa fa-car" aria-hidden="true" />
      </div>
    );
  }
}

export default Navbar;
