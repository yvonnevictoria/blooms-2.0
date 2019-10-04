import React from "react";

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
