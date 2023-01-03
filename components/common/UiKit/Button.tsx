import React from "react";

function Button({ text, onClick, className }) {
  const classes = ["button", className];
  return (
    <button onClick={onClick} className={classes.join(" ")}>
      {text}
    </button>
  );
}

export default Button;
