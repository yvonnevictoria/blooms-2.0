import React from "react";

const HeadingEdit = ({ placeholder}) => {
    let edit = false;
    function change() { edit = true; console.log(edit); }

    return (
        <div className="heading-edit">
            { !edit &&
                    <p>{placeholder}</p>
            }
            <button className="btn edit-btn" onClick={change}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
        </div>

    );
}

export {
    HeadingEdit
};
