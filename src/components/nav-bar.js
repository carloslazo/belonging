import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Error from "../resources/noun_Error_89607_000000.svg";
class Navbar extends Component {
  handleClick = event => {
    event.preventDefault();
    console.log(event.target.getAttribute('name'));
    if (event.target.getAttribute('name') == "chat"){
      window.location = "/chat";
    } else {
      window.location = "/";
    }
  };

  render() {
    return (
      <div className="nav-bar-container">
        <i
          onClick={this.handleClick}
          type="button"
          className="fa fa-info-circle fa-6"
          aria-hidden="true"
        />
        <i onClick={this.handleClick} class="fa fa-bed" aria-hidden="true" />
        <i
          onClick={this.handleClick}
          name = "chat"
          class="fa fa-comment"
          aria-hidden="true"
        />

        <i onClick={this.handleClick} class="fas fa-utensils" />

        <i onClick={this.handleClick} class="fa fa-car" aria-hidden="true" />
      </div>
    );
  }
}

export default Navbar;
