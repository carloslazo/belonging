import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "../components/page.js";

class Login extends Component {
  render() {
    return (
      <Page>
        <div className="main-login-form">
          <p>
            BELONG is a platform that provides a digital space of belonging for
            youth experiencing homelessness
          </p>
          <div className="form-container">
          <form className="login-form">
              <input />
              <input />
            <button>Login</button>
          </form>
          </div>
          <div>
            <p>
              If you are a youth experiencing homelessness, please reach out to
              a San Diego Service Provider here for them to generate a login in
              for you.
            </p>
          </div>
        </div>


      </Page>
    );
  }
}

export default Login;
