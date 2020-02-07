import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import MessageList from "./MessageList";

export class ChatWindow extends Component {
  state = {
    message: {
      username: "",
      text: ""
    },
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" }
    ]
  };
  handleInputChange = ({ target: { value, name } }) => {
    this.setState(currentState => ({
      message: {
        ...currentState.message,
        username: name,
        text: value
      }
    }));
  };

  handleSendText = () => {
    this.setState(state => ({
      messages: [...state.messages, state.message]
    }));
  };
  render() {
    const { user } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user}</div>
        <MessageList messages={this.state.messages} />
        <div>
          <div className="input-group">
            <Input
              name={user}
              value={this.state.message.text}
              handleChange={this.handleInputChange}
            />
            <div className="input-group-append">
              <Button handClick={this.handleSendText} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
