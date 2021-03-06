import React, { Component } from "react";
import Navbar from "../components/nav-bar.js";
class Page extends Component {
  render() {
    return (
      <div className="container" >
        <div className="content" style={{background: this.props.background}}>{this.props.children}</div>
        <div className="footer">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Page;
