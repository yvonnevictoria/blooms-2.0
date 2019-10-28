import React, { useState } from 'react';
import axios from 'axios';
import { HeadingEdit } from "./formElements/HeadingEdit";
import { TextInput } from "./formElements/TextInput";
import { Dropdown } from "./formElements/Dropdown";
import { RadioChip } from "./formElements/RadioChip";
import "../stylesheets/AddBloomForm.css"
;

const AddBloomForm = () => {
    const [bloomName, setBloomName] = useState({ value: 'Name of flower', error: null, edit: false });
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [wateringLevel, setWateringLevel] = useState('');
    const [humidityPreference, setHumidityPreference] = useState('');
    const [sunlightPreference, setSunlightPreference] = useState('');
    const [notes, setNotes] = useState('');

    const addBloom = () => {
        const payload = {
            name: bloomName,
            wateringFrequency,
            wateringLevel,
            humidityPreference,
            sunlightPreference,
            notes
        };

        axios.post('http://localhost:4000/add', payload)
          .then(function (response) {
            console.log(response);
            // change page
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <div className="form-wrapper">
            <HeadingEdit
                placeholder={bloomName.value}
                edit={bloomName.edit}
                toggle={() => setBloomName({ ...bloomName, edit: !bloomName.edit })}
                inputId="plant-name"
                inputOnChange={value => setBloomName({ ...bloomName, value })}
            />
            <label>Watering frequency</label>
            <div className="form-element radio-chip-group">
                <RadioChip
                    id="plant-wf-daily"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Every day"
                    onClick={e => setWateringFrequency(e.target.id)}
                />
                <RadioChip
                    id="plant-wf-2days"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Every 2-3 days"
                    onClick={e => setWateringFrequency(e.target.id)}
                />
                <RadioChip
                    id="plant-wf-weekly"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Weekly"
                    onClick={e => setWateringFrequency(e.target.id)}
                />
                <RadioChip
                    id="plant-wf-fortnightly"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Fortnightly"
                    onClick={e => setWateringFrequency(e.target.id)}
                />
            </div>

            <label>Watering level</label>
            <div className="form-element radio-chip-group">
                <RadioChip
                    id="plant-wl-wet"
                    name="plant-watering-level"
                    className="radio-chip"
                    label="Wet soil"
                    onClick={e => setWateringLevel(e.target.id)}
                />
                <RadioChip
                    id="plant-wl-moist"
                    name="plant-watering-level"
                    className="radio-chip"
                    label="Moist soil"
                    onClick={e => setWateringLevel(e.target.id)}
                />
                <RadioChip
                    id="plant--wl-light"
                    name="plant-watering-level"
                    className="radio-chip"
                    label="Lightly wet soil"
                    onClick={e => setWateringLevel(e.target.id)}
                />
            </div>

            <label>Likes humidity?</label>
            <div className="form-element radio-chip-group">
                <RadioChip
                    id="plant-humidity-yes"
                    name="plant-humidity"
                    className="radio-chip"
                    label="Yes, lots of moisture"
                    onClick={e => setHumidityPreference(e.target.id)}
                />
                <RadioChip
                    id="plant-humidity-no"
                    name="plant-humidity"
                    className="radio-chip"
                    label="No, keep it dry"
                    onClick={e => setHumidityPreference(e.target.id)}
                />
            </div>

            <Dropdown
                id="plant-sunlight"
                name="plant-sunlight"
                label="Sunlight"
                className="dropdown"
                options={[
                    {key: "", value: "Please select..."},
                    {key: "Direct sunlight", value: "Direct sunlight"},
                    {key: "Part sun/Part shade", value: "Part sun/Part shade"},
                    {key: "Bright, indirect sunlight", value: "Bright, indirect sunlight"},
                    {key: "Indirect/filtered light", value: "Indirect/filtered light"},
                    {key: "Low light", value: "Low light"},
                    {key: "Other", value: "Other"}
                ]}
                onChangeHandler={e => setSunlightPreference(e.target.value)}
            />

            <TextInput
                id="plant-notes"
                name="plant-notes"
                label="Notes (optional)"
                className="text-input"
                onChangeHandler={e => setNotes(e.target.value)}
            />

            <button
                type="button"
                className="action-btn"
                onClick={addBloom}
                disabled={!(
                    bloomName.value.length
                    && !bloomName.error
                    && wateringFrequency.length
                    && wateringLevel.length
                    && humidityPreference.length
                    && sunlightPreference.length
                )}
            >
                Submit
            </button>
        </div>
    );
};

export {
    AddBloomForm
};
