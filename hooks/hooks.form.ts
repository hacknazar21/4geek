import { useState, useEffect, useContext } from "react";
import { Validation } from "../helpers/validation";
import useHttp from "./hooks.http";
import { AuthContext } from "../context/AuthContext";

const useForm = (
  onSuccess = (response) => {},
  defaultForm = {},
  isJSON = false
) => {
  const [error, setError] = useState([]);
  const [form, setForm] = useState(defaultForm || {});
  const validation = new Validation();
  const { request, loading } = useHttp();
  const { token } = useContext(AuthContext);
  const dropForm = () => {
    setForm(defaultForm || {});
  };
  const formChangeHandler = (event) => {
    setForm((prevState) => {
      if (!prevState[event.target.type])
        prevState[event.target.type] = {
          [event.target.name]: event.target.value,
        };
      else prevState[event.target.type][event.target.name] = event.target.value;
      validateValue(event.target);
      return { ...prevState };
    });
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const action = event.target.action;
    const method = event.target.dataset.method;
    const formData = new FormData();
    let formJson = {};
    if (!isJSON)
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
          case "array":
            for (const formName in form[formType]) {
              for (const formValue of form[formType][formName]) {
                formData.append(formName, formValue);
              }
            }
            break;
          default:
            for (const formName in form[formType]) {
              if (form[formType][formName]) {
                formData.append(formName, form[formType][formName]);
              }
            }
        }
      }
    else {
      for (const formType in form) {
        formJson = { ...formJson, ...form[formType] };
      }
    }
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    if (isJSON) {
      headers["Content-Type"] = `application/json`;
    }
    headers["Accept"] = `application/json`;

    try {
      const response = await request(
        action,
        method,
        !isJSON ? formData : formJson,
        headers,
        !isJSON
      );
      onSuccess(response);
    } catch (e) {
      console.log(e.message);
      try {
        const errorsResp = JSON.parse(e.message);
        const errors = [];
        for (const errorsKey in errorsResp) {
          errors.push({
            name: errorsKey,
            value:
              typeof errorsResp[errorsKey] === "object"
                ? errorsResp[errorsKey].join()
                : errorsResp[errorsKey],
          });
        }
        setError(errors);
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  const validateValue = (target) => {
    setError([]);
    switch (target.type) {
      case "email":
        if (!validation.isEmail(target.value))
          setError([
            {
              name: [target.name],
              value: "Email введен неверно",
            },
          ]);
        break;
      case "password":
        if (
          target.name === "password_check" &&
          !validation.isPasswordsMatch(form.password.password, target.value)
        ) {
          setError([
            {
              name: [target.name],
              value: "Пароли не совпадают",
            },
          ]);
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const inputs = document.querySelectorAll("input.error");
    if (inputs)
      for (const input of inputs) {
        input.classList.remove("error");
        const labelError = input.parentElement.querySelector(".error-label");
        if (labelError) labelError.remove();
      }
    for (const errorElement of error) {
      const input = document.querySelector(
        `input[name="${errorElement["name"]}"]`
      );
      if (input) {
        input.classList.add("error");
        input.focus();
        input.parentElement.insertAdjacentHTML(
          "beforeend",
          `<p class="error-label">${errorElement["value"]}</p>`
        );
      }
    }
  }, [error]);
  return {
    error,
    formChangeHandler,
    formSubmitHandler,
    form,
    setForm,
    loading,
    dropForm,
  };
};
export default useForm;
