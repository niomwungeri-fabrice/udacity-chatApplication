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
    isDisabled: true
  };
  handleInputChange = ({ target: { value, name } }) => {
    this.setState(currentState => ({
      message: {
        ...currentState.message,
        username: name,
        text: value
      },
      isDisabled: false
    }));
  };
  handleClick = () => {
    const { handleMessage } = this.props;
    const { message } = this.state;
    handleMessage(message);
    this.setState(currentState => ({
      message: {
        ...currentState.message,
        username: "",
        text: ""
      },
      isDisabled: true
    }));
  };
  render() {
    const { messages, user } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user}</div>
        <MessageList messages={messages} />
        <div>
          <div className="input-group">
            <Input
              name={user}
              value={this.state.message.text}
              handleChange={this.handleInputChange}
            />
            <div className="input-group-append">
              <Button
                handClick={this.handleClick}
                isDisabled={this.state.isDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
