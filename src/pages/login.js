import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "../components/page.js";
import Hands from "../resources/hands.jpg";
class Login extends Component {
   handleClick = (event) =>{
    event.preventDefault();
    window.location = "/home"
  }
  render() {
    return (
      <Page background="white">
        <div className="line"/>
        <div className="main-login-form">
          <img className="picture-login" src={Hands} width="180" />
          <p>
            BELONG is a platform that provides a digital space of belonging for
            youth experiencing homelessness
          </p>

          <div className="form-container">
            <form className="login-form">
              <input />
              <input />
              <button onClick={this.handleClick}>Login</button>
            </form>
          </div>
          <div>
            <p>
              If you are a youth experiencing homelessness, please reach out to
              a San Diego Service Provider <b>here</b> for them to generate a login in
              for you.
            </p>
          </div>
        </div>
      </Page>
    );
  }
}

export default Login;
