import React from "react";

const Button = props => {
  const { handClick } = props;
  return (
    <button
      onClick={handClick}
      className="btn submit-button"
      disabled={props.isDisabled}
    >
      SEND
    </button>
  );
};

export default Button;
