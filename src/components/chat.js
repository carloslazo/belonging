import React, { Component } from "react";

class ChatPage extends Component {
  handleClick = event => {
    event.preventDefault();
    window.location = "/";
  };

  render() {
    return (
      <div className="chat-container">
        <div className="chat-title">
          <p>Community Chat</p>
        </div>
        <div />

        <div className="row">
          <div id="chat-box" className="card card-body" />
        </div>

        <div className="field-container">
          <p>
            <b>Service Provider-Jenny:</b> El Cajon will have a Flu Shots mobile
            clinic this Sat 9-2. Service Provider-Maria: That’s a great reminder
            Jenny!
          </p>
          <p>
            <b>Service Provider-Maria:</b> That’s a great reminder Jenny!
          </p>
          <p>
            <b>Service Provider-Maria:</b> I also wanted to remind everyone,
            that there will be a BBQ at Kate Sessions Park in PB later that day.
          </p>
          <p>
            <b>Youth 1:</b> Do we need to bring anything to the Flu Clinic?
          </p>
          <p>
            <b>Service Provider-Jenny: </b> If you have your ID, that helps.
          </p>
          <p>
            <b>Youth 1:</b> Thank you!

          </p>
          <p>
            <b>Service Provider-Jenny:</b> No Problem!
          </p>
        </div>

        <div className="row">
          <form>
            <div className="chat-group">
              <input
              className="chat-input"
                type="text"
                placeholder="type here.."
              />
              <button className="chat-button">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatPage;
