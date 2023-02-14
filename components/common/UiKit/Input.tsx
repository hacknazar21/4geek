import InputMask from "../InputMask";

function Input({
  label = null,
  name,
  type,
  id,
  onInput = (event) => {},
  onChange = (event) => {},
  className,
  error = null,
  defaultValue,
  required = false,
  disabled = false,
  additionalButton = <></>,
  placeholder = null,
}) {
  const reqClass = required ? "required" : "";
  const classes = ["input-box", className, reqClass];
  return (
    <div className={classes.join(" ")}>
      {!!label && <label htmlFor={id}>{label}</label>}
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
          placeholder={placeholder}
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
          placeholder={placeholder}
          rows={4}
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
            placeholder={placeholder}
          />
          {additionalButton}
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
