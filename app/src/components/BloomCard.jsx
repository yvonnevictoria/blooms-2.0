import React, { useState } from 'react';
import '../stylesheets/DisplayBlooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { MenuOptions } from './MenuOptions';

const BloomCard = ({ bloomId, bloomName, wateringFrequency, wateringLevel, humidity, sunlight, notes, getBlooms }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const wateringFreqLabel = wateringFrequency.slice(9);
    const wateringLevelLabel = wateringLevel.slice(9);
    const humidityLabel = humidity ? `Likes humidity` : `Doesn't like humidity`;
    return (
        <div className="bloom-card">
            <div className="flex-horizontal">
                <div className="bloom-name">{bloomName}</div>
                <button className="btn menu-btn" onClick={() => setMenuOpen(true)}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
            </div>
            {
                // TODO: Come back and add this feature correctly.
            }
            {
                menuOpen && ( <MenuOptions id={bloomId} name={bloomName} getBlooms={() => getBlooms()} setMenuOpen={() => setMenuOpen()} /> )
            }
            <div className="desc bloom-watering-freq">
                <span className="title">Watering Frequency: </span>
                <span className="content">{wateringFreqLabel}</span>
                </div>
            <div className="desc bloom-watering-level">
                <span className="title">Watering Level: </span>
                <span className="content">{wateringLevelLabel}</span>
            </div>
            <div className="desc bloom-humidity">
                <span className="title">Humidity: </span>
                <span className="content">{humidityLabel}</span>
            </div>
            <div className="desc bloom-sunlight">
                <span className="title">Sunlight: </span>
                <span className="content">{sunlight}</span>
            </div>
            {
                !!notes.length && (
                    <div className="desc bloom-notes">
                        <span className="title">Notes: </span>
                        <span className="content">{notes}</span>
                    </div>
                )
            }
        </div>
    );
};

export {
    BloomCard
};

// Note for my learning: It was a mistake to let the FE do the data formatting. Next time, store the values you want to retrieve
// or let the BE format the data for you
