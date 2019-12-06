import React from 'react';
import '../stylesheets/DisplayBlooms.css'

const BloomCard = ({ bloomId, bloomName, wateringFrequency, wateringLevel, humidity, sunlight, notes }) => {
    const wateringFreqLabel = wateringFrequency.slice(9);
    const wateringLevelLabel = wateringLevel.slice(9);
    const humidityLabel = humidity ? `Likes humidity` : `Doesn't like humidity`;
    return (
        <div className="bloom-card">
            <div className="bloom-name">{bloomName}</div>
            <div className="desc bloom-watering-freq">Watering Frequency: {wateringFreqLabel}</div>
            <div className="desc bloom-watering-level">Watering Level: {wateringLevelLabel}</div>
            <div className="desc bloom-humidity">Humidity: {humidityLabel}</div>
            <div className="desc bloom-sunlight">Sunlight: {sunlight}</div>
            {
                !!notes.length && (
                    <div className="desc bloom-notes">Notes: {notes}</div>
                )
            }
        </div>
    );
};

export {
    BloomCard
};

// Note: It was a mistake to let the FE do the data formatting. Next time, store the values you want to retrieve
// or let the BE format the data for you
