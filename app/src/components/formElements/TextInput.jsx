import React from "react";

// TODO: Add max of 300 chars and add counter.
const TextInput = ({ id, className, name, label, onChangeHandler }) => (
    <div className="form-element">
        <label htmlFor={id}>
            {label}
        </label>
        <textarea
            name={name}
            id={id}
            className={className}
            onChange={onChangeHandler}>
        </textarea>
    </div>
);

export {
    TextInput
};
