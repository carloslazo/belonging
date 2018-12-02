import React, { Component } from "react";
import Error from "../resources/noun_Error_89607_000000.svg";

class PictureInstagram extends Component {
  render() {
    return (
        <img className="instagram-image-component" src={this.props.image} />
    );
  }
}

export default PictureInstagram;
