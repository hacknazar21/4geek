import React from "react";
import InputMask from "../InputMask";

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
  required = false,
  disabled = false,
  additionalButton = <></>,
}) {
  const reqClass = required ? "required" : "";
  const classes = ["input-box", className, reqClass];
  return (
    <div className={classes.join(" ")}>
      <label htmlFor={id}>{label}</label>
      {type === "tel" ? (
        <InputMask
          onChange={onInput || onChange}
          name={name}
          id={id}
          type={type}
          className="input"
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
        />
      ) : type === "textarea" ? (
        <textarea
          onInput={onInput}
          onChange={onChange}
          name={name}
          id={id}
          className="input"
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
        />
      ) : (
        <>
          <input
            onInput={onInput}
            onChange={onChange}
            name={name}
            id={id}
            type={type}
            className="input"
            defaultValue={defaultValue}
            required={required}
            disabled={disabled}
          />
          {additionalButton}
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
