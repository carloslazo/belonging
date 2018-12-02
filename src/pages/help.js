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
        <div className="help-main-container">
          <div className="help-small-container">
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Need Help NOW
            </p>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-phone fa-flip-horizontal"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>Call</b>{" "}
                </p>
              </div>
            </div>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-comment"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>Text</b>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="help-small-container-1">
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Resources
            </p>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-mobile"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>Phone charging stations</b>{" "}
                </p>
              </div>
            </div>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-shower"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>Shower facilities</b>{" "}
                </p>
              </div>
            </div>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-users"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>San Diego Youth Services</b>{" "}
                </p>
              </div>
            </div>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-circle"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>Walk-in centers</b>{" "}
                </p>
              </div>
            </div>
            <div className="help-rectangle">
              <div className="icon-container">
                <i
                  class="fa fa-bars"
                  style={{
                    textAlign: "center",
                    paddingRight: "10px",
                    paddingLeft: "10px"
                  }}
                  aria-hidden="true"
                />
                <p>
                  {" "}
                  <b>Additional resources</b>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Help;
