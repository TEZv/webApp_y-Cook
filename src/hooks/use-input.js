import { useState } from "react";

const useInput = (verify) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = verify(enteredValue) && isTouched;
  const inputIsInvalid = !inputIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurChangeHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valid: inputIsValid,
    invalid: inputIsInvalid,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInput;