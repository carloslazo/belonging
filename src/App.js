import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import Chat from "./pages/chat-page.js"
import Help from "./pages/help.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/help" component={Help} />

        </div>
      </Router>
    );
  }
}

export default App;
