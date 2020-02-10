import React from "react";

const Button = props => {
  const { handClick, isDisabled } = props;
  return (
    <button
      onClick={handClick}
      className="btn submit-button"
      disabled={isDisabled}
    >
      SEND
    </button>
  );
};

export default Button;
