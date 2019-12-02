import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { BloomCard } from './BloomCard';

const DisplayBlooms = () => {
    const [blooms, setBlooms] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/getAll')
            .then(function (response) {
                const { data } = response;
               setBlooms(data);
            })
            .catch(function (error) {
              console.log(error);
              setErrors(error);
            });
    }, []);

    return (
        <Fragment>
            <h1>Blooms</h1>
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
                    />
                ))
            }
            <button onClick={() => {console.log(blooms)}}>Log blooms</button>

        </Fragment>
    );
};

export {
    DisplayBlooms
};
