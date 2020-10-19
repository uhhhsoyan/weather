import React from 'react';
import ShowersIcon from '../assets/Shower.png'

const ForecastCard = () => {
    return (
        <div className="forecast-card">
            <p>Tomorrow</p>
            <img className="fcast-card-icon" src={ShowersIcon} alt="weather icon" />
            <div className="fcast-hi-lo">
                <p className="fcast-hi">16&deg;C</p>
                <p className="fcast-lo">11&deg;C</p>
            </div>
        </div>
    )
}

export default ForecastCard;