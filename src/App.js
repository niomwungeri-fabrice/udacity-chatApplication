import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import "./styles.css";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages: []
  };
  handleSendText = message => {
    this.setState(state => ({
      messages: [...state.messages, message]
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow
            user="Amy"
            handleMessage={this.handleSendText}
            messages={this.state.messages}
          />
          <ChatWindow
            user="John"
            handleMessage={this.handleSendText}
            messages={this.state.messages}
          />
        </div>
      </div>
    );
  }
}

export default App;
