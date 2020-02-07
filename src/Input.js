import React from "react";

const Input = props => {
  const { value, handleChange, name } = props;
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Enter your message..."
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Input;
