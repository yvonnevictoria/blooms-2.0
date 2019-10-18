import React from "react";

const Dropdown = ({ id, className, label, name, onChangeHandler, options }) => (
    <div className="form-element">
        <label htmlFor={id}>
            {label}
        </label>
        <select id={id} name={name} onChange={onChangeHandler} className={className}>
            {
                options.map((item, index) => (
                    <option key={index} value={item.key}> { item.value }</option>
                ))
            }
        </select>
    </div>
);

export {
    Dropdown
};
