import { useState, useCallback, useEffect, useContext } from "react";
import { Validation } from "../helpers/validation";
import useHttp from "./hooks.http";
import { AuthContext } from "../context/AuthContext";

const useForm = (onSuccess = (response) => {}, defaultForm = {}) => {
  const [error, setError] = useState([]);
  const [form, setForm] = useState(defaultForm || {});
  const validation = new Validation();
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);
  const formChangeHandler = (event) => {
    setForm((prevState) => {
      if (!prevState[event.target.type])
        prevState[event.target.type] = {
          [event.target.name]: event.target.value,
        };
      else if (
        event.target.type === "select-checkboxes" &&
        prevState[event.target.type][event.target.name]
      ) {
        for (const valueElement of event.target.value) {
          if (
            prevState[event.target.type][event.target.name].indexOf(
              valueElement
            ) === -1
          )
            prevState[event.target.type][event.target.name].push(valueElement);
        }
      } else
        prevState[event.target.type][event.target.name] = event.target.value;
      validateValue(event.target);
      return prevState;
    });
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!!error.length) {
      return;
    }
    const action = event.target.action;
    const method = event.target.dataset.method;
    const formData = new FormData();
    for (const formType in form) {
      switch (formType) {
        case "file":
          for (const formName in form[formType]) {
            for (const formValue of form[formType][formName]) {
              formData.append(formName, formValue, formValue.name);
            }
          }
          break;
        case "select-checkboxes":
          for (const formName in form[formType]) {
            for (const formValue of form[formType][formName]) {
              formData.append(formName, formValue);
            }
          }
          break;
        default:
          for (const formName in form[formType]) {
            formData.append(formName, form[formType][formName]);
          }
      }
    }
    const headers = {};
    if (!!token) headers["Authorization"] = `Bearer ${token}`;
    try {
      const response = await request(action, method, formData, headers, true);
      onSuccess(response);
    } catch (e) {
      try {
        const errorsResp = JSON.parse(e.message);
        const errors = [];
        for (const errorsKey in errorsResp) {
          errors.push({
            name: errorsKey,
            value: errorsResp[errorsKey],
          });
        }
        setError(errors);
      } catch (e) {}
    }
  };
  const validateValue = (target) => {
    setError([]);
    switch (target.type) {
      case "email":
        !validation.isEmail(target.value)
          ? setError([
              {
                name: [target.name],
                value: ["Email введен неверно"],
              },
            ])
          : null;
        break;
      case "password":
        !validation.isPasswordsMatch(target.value, form?.password?.password)
          ? setError([
              {
                name: [target.name],
                value: ["Пароли не совпадают"],
              },
            ])
          : null;
        break;
      default:
        break;
    }
  };
  const clearForm = () => {
    setForm(defaultForm || {});
    setError([]);
  };
  useEffect(() => {
    const inputs = document.querySelectorAll("div.error");
    if (inputs) {
      for (const input of inputs) {
        input.classList.remove("error");
        const labelErrors = input.parentElement.querySelectorAll("p.error");
        if (labelErrors && labelErrors.length) {
          for (const labelError of labelErrors) {
            labelError.remove();
          }
        }
      }
    }
    for (const errorElement of error) {
      const input = document.querySelector(
        `input[name="${errorElement["name"]}"]`
      );
      if (input) {
        input.parentElement.classList.add("error");
        input.focus();
        typeof errorElement["value"] === "string"
          ? input.parentElement.insertAdjacentHTML(
              "beforeend",
              `<p class="error">${errorElement["value"]}</p>`
            )
          : errorElement["value"].map((value) =>
              input.parentElement.insertAdjacentHTML(
                "beforeend",
                `<p class="error">${value}</p>`
              )
            );
      }
    }
  }, [error]);
  return {
    setError,
    error,
    formChangeHandler,
    formSubmitHandler,
    form,
    setForm,
    loading,
    clearForm,
  };
};
export default useForm;
