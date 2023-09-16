import React from "react";

const Input = React.forwardRef(function Input(props, ref) {
    return (
        <label htmlFor={props.input.id}>
            {props.label}
            <input
                className="text-black text-center"
                ref={ref}
                {...props.input}
            />
        </label>
    );
});

export default Input;
