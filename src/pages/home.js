import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "../components/page.js";
import PictureInstagram from "../components/picture-instagram.js";
import ChatScroll from "../components/chat-scroll.js";
import Instagram from "../resources/115.jpg";
import TestMap from "../resources/testmap.png";
import ToDo from "../resources/todo.png";

class Home extends Component {
  handleClick = event => {
    event.preventDefault();
    window.location = "/chat";
  };
  render() {
    return (
      <Page>
        <div className="scroll-and-button">
          <div className="home-page-scroll-chat-container">
            <ChatScroll />
          </div>
          <div className="home-button-container">
            <button onClick={this.handleClick}>Join conversation</button>
          </div>
        </div>
        <div className="instagram-main-container">
          <div className="home-page-instagram">
            <PictureInstagram image={ToDo} />
          </div>
        </div>
        <div className="map-container">
          <i className="fa fa-map-marker" aria-hidden="true" />
          <p>Click for nearby events</p>
        </div>
      </Page>
    );
  }
}

export default Home;

// <button className="home-page-event-button">Check event</button>
