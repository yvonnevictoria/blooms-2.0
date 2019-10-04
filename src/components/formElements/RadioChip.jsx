import React from "react";

const RadioChip = ({ id, className, label, name, onClick }) => (
    <div className="radio-chip">
        <input type="radio" id={id} name={name} onClick={onClick}/>
        <label htmlFor={id} className={className}>{label}</label>
    </div>
);

export {
    RadioChip
};
