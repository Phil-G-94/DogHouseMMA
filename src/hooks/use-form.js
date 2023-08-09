import { useState } from "react";

const useForm = (validateValue) => {
    // state

    const [inputValue, setInputValue] = useState("");
    const [inputValueIsTouched, setInputValueIsTouched] = useState(false);

    const valueIsValid = validateValue(inputValue);

    const hasError = !valueIsValid && inputValueIsTouched;

    // handlers 

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const inputBlurHandler = () => {
        setInputValueIsTouched(true);
    }

    // reset

    const reset = () => {
        setInputValue("");
        setInputValueIsTouched(false);
    }

    // return object

    return {
        value: inputValue,
        isValid: valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useForm;