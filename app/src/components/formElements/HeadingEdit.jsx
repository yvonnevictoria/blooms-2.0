import React, { Fragment } from "react";
import { TextInput } from "./TextInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

const HeadingEdit = ({ placeholder, edit, toggle, inputId, inputOnChange }) => {
    return (
        <div className="heading-edit">
            { edit
                ?
                <Fragment>
                    <input
                        name={inputId}
                        id={inputId}
                        className="input-edit-true"
                        onChange={e => inputOnChange(e.target.value)}>
                    </input>
                    <button className="btn edit-btn" onClick={toggle}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </Fragment>

                :
                <Fragment>
                    <p>{placeholder}</p>
                    <button className="btn edit-btn" onClick={toggle}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                </Fragment>
            }
        </div>

    );
}

export {
    HeadingEdit
};
