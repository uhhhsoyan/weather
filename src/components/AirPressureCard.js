import React from 'react';

const AirPressureCard = ({ airPressure }) => {
    return (
        <div className="highlight-card-small">
            <p>Air Pressure</p>
            <p className="wind-speed"><b>{Math.round(airPressure)}</b> mb</p>
        </div>
    )
}

export default AirPressureCard;