import React from "react";

function Input({
  label,
  name,
  type,
  id,
  onInput,
  onChange,
  className,
  error,
  defaultValue,
}) {
  const classes = ["input-box", className];
  return (
    <div className={classes.join(" ")}>
      <label htmlFor={id}>{label}</label>
      <input
        onInput={onInput}
        onChange={onChange}
        name={name}
        id={id}
        type={type}
        className="input"
        defaultValue={defaultValue}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
