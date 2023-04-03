import React from "react";

const Button = ({ classes, text }: { classes: string; text: string }) => {
  return (
    <button type="button" className={`flex items-center btn ${classes}`}>
      {text}
    </button>
  );
};

export default Button;
