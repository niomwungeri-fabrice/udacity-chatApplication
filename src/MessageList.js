import React from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const MessageList = props => {
  const { messages } = props;
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === users[1].username
              ? "message sender"
              : "message recipient"
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
