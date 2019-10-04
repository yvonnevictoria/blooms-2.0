import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const HeadingEdit = ({ placeholder}) => {
    let edit = false;
    function change() { edit = true; console.log(edit); }

    return (
        <div className="heading-edit">
            { !edit &&
                    <p>{placeholder}</p>
            }
            <button className="btn edit-btn" onClick={change}>
                <FontAwesomeIcon icon={faPen} />
            </button>
        </div>

    );
}

export {
    HeadingEdit
};
