import React from "react";
import { HeadingEdit } from "./formElements/HeadingEdit";
import { TextInput } from "./formElements/TextInput";
import { Dropdown } from "./formElements/Dropdown";
import { RadioChip } from "./formElements/RadioChip";
import "../stylesheets/AddBloomForm.css"
;

const AddBloomForm = () => {
    function print(val) { console.log(val.target.value) }

    return (
        <div className="form-wrapper">
            <HeadingEdit placeholder="Name of flower" />
            <label>Watering frequency</label>
            <div className="form-element radio-chip-group">
                <RadioChip
                    id="plant-wf-daily"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Every day"
                    onChangeHandler={print}
                />
                <RadioChip
                    id="plant-wf-2days"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Every 2-3 days"
                    onChangeHandler={print}
                />
                <RadioChip
                    id="plant-wf-weekly"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Weekly"
                    onChangeHandler={print}
                />
                <RadioChip
                    id="plant-wf-fortnightly"
                    name="plant-watering-frequency"
                    className="radio-chip"
                    label="Fortnightly"
                    onChangeHandler={print}
                />
            </div>

            <label>Watering level</label>
            <div className="form-element radio-chip-group">
                <RadioChip
                    id="plant-wl-wet"
                    name="plant-watering-level"
                    className="radio-chip"
                    label="Wet soil"
                    onChangeHandler={print}
                />
                <RadioChip
                    id="plant-wl-moist"
                    name="plant-watering-level"
                    className="radio-chip"
                    label="Moist soil"
                    onChangeHandler={print}
                />
                <RadioChip
                    id="plant--wl-light"
                    name="plant-watering-level"
                    className="radio-chip"
                    label="Lightly wet soil"
                    onChangeHandler={print}
                />
            </div>

            <label>Likes humidity?</label>
            <div className="form-element radio-chip-group">
                <RadioChip
                    id="plant-humidity-yes"
                    name="plant-humidity"
                    className="radio-chip"
                    label="Yes, lots of moisture"
                    onChangeHandler={print}
                />
                <RadioChip
                    id="plant-humidity-no"
                    name="plant-humidity"
                    className="radio-chip"
                    label="No, keep it dry"
                    onChangeHandler={print}
                />
            </div>

            <Dropdown
                id="plant-sunlight"
                name="plant-sunlight"
                label="Sunlight"
                className="dropdown"
                options={[
                    {key: "", value: "Please select..."},
                    {key: "a", value: "Direct sunlight"},
                    {key: "b", value: "Part sun/Part shade"},
                    {key: "c", value: "Bright, indirect sunlight"},
                    {key: "d", value: "Indirect/filtered light"},
                    {key: "e", value: "Low light"},
                    {key: "f", value: "Other"}
                ]}
                onChangeHandler={print}
            />
            <TextInput id="plant-notes" name="plant-notes" label="Notes" className="text-input" onChangeHandler={print} />
            <button type="btn" className="action-btn" onClick={print}>Submit</button>
        </div>
    );
};

export {
    AddBloomForm
};
