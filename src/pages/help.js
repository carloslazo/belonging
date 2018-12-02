import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from "../components/chat.js";
import Page from "../components/page.js";

class Help extends Component {
  handleClick = event => {
    event.preventDefault();
    window.location = "/home";
  };
  render() {
    return (
      <Page background="white">
      hey
      </Page>
    );
  }
}

export default Help;
