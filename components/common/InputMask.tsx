import React, { useRef } from "react";

const InputMask = (props: any) => {
  const inputCard: React.MutableRefObject<HTMLInputElement> = useRef();
  const getInputNumbersValue = function (input) {
    return input?.value.replace(/\D/g, "");
  };
  const handleChange = (e) => {
    if (e.target) {
      let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue: string = "";

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length != selectionStart) {
        // Editing in the middle of input, not last symbol
        if (e.data && /\D/g.test(e.data)) {
          // Attempt to input non-numeric symbol
          input.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == "9")
          inputNumbersValue = "7" + inputNumbersValue;
        let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
      props.onChange({
        target: {
          value: formattedInputValue
            .replace(/-/g, "")
            .replace(/ /g, "")
            .replace(/\(/g, "")
            .replace(/\)/g, ""),
          name: e.target.name,
          type: e.target.type,
        },
      });
    }
  };

  return (
    <>
      <input
        {...props}
        ref={inputCard}
        onChange={handleChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputMask;
