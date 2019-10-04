import React from "react";

const RadioChip = ({ id, className, label, name }) => (
    <div className="radio-chip">
        <input type="radio" id={id} name={name} />
        <label htmlFor={id} className={className}>{label}</label>
    </div>
);

export {
    RadioChip
};
