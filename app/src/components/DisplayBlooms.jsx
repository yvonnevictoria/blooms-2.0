import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BloomCard } from './BloomCard';
import { Link } from "react-router-dom";

const DisplayBlooms = () => {
    const [blooms, setBlooms] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const getBlooms = () => {
        axios.get('http://localhost:4000/getAll')
            .then(function (response) {
                const { data } = response;
               setBlooms(data);
            })
            .catch(function (error) {
              console.log(error);
              setErrors(error);
            });
    };

    useEffect(() => {
        getBlooms();
    }, []);

    return (
        <Fragment>
            <h1>Blooms</h1>
            <div className="bloom-card-holder">
                {
                    blooms.map(({ id, name, wateringFrequency, wateringLevel, humidity, sunlight, notes }) => (
                        <BloomCard
                            bloomId={id}
                            bloomName={name}
                            wateringFrequency={wateringFrequency}
                            wateringLevel={wateringLevel}
                            humidity={humidity}
                            sunlight={sunlight}
                            notes={notes}
                            getBlooms={() => getBlooms()}
                        />
                    ))
                }
            </div>
            <button onClick={() => {console.log(blooms)}}>Log blooms</button>
            <button onClick={() => history.push("/add")}>Add blooms</button>
        </Fragment>
    );
};

export {
    DisplayBlooms
};
