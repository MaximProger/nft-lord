import React from "react";

const Button = ({ classes, text }) => {
  return (
    <button type="button" className={`flex items-center btn ${classes}`}>
      {text}
    </button>
  );
};

export default Button;
