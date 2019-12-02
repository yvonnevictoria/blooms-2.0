import React from 'react';
import '../stylesheets/DisplayBlooms.css'

const BloomCard = ({ bloomId, bloomName, wateringFrequency, wateringLevel, humidity, sunlight, notes }) => (
    <div className="bloom-card">
        Name: {bloomName}<br />
        Watering Frequency: {wateringFrequency}<br />
        Watering Level: {wateringLevel}<br />
        Humidity: {humidity}<br />
        Sunlight: {sunlight}<br />
        Notes: {notes}
    </div>
);

export {
    BloomCard
};
