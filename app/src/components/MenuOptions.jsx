import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/DisplayBlooms.css';

const MenuOptions = ({ id, name, getBlooms, setMenuOpen }) => {
    const deleteBloom = () => {
        axios.delete('http://localhost:4000/delete', {
            data: {
                name: name,
                id: id
            }
        })
        .then(function (response) {
            console.log(response);
            getBlooms();
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div className="menu-options" onBlur={() => setMenuOpen(false)}>
            <div className="option">
                <button onClick={() => {}}>Edit</button>
            </div>
            <div className="option">
                <button onClick={() => deleteBloom()}>Delete</button>
            </div>
        </div>
    );
};

export {
    MenuOptions
};
