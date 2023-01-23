import React from "react";

function Button({ text, onClick, className, disabled = false }) {
  const classes = ["button", className];
  return (
    <button onClick={onClick} disabled={disabled} className={classes.join(" ")}>
      {text}
    </button>
  );
}

export default Button;
