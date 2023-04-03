import React from "react";

const Button = ({ classes, text }) => {
  return (
    <button type="button" className={`btn ${classes}`}>
      {text}
    </button>
  );
};

export default Button;
