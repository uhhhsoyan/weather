import React from 'react';
import ForecastCard from './ForecastCard';
import WindCard from './WindCard.js';
import HumidityCard from './HumidityCard';
import VisibilityCard from './VisibilityCard';
import AirPressureCard from './AirPressureCard';

const Dashboard = () => {
    
    const toggleCelsius = () => {

    }

    const toggleFahrenheit = () => {

    }
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-temp-btn-row">
                <a href="#0" className="dashboard-temp-btn" onClick={toggleCelsius}>&deg;C</a>
                <a href="#0" className="dashboard-temp-btn" onClick={toggleFahrenheit}>&deg;F</a>
            </div>
            <div className="forecast-container">
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </div>
            <p className="highlights-title">Today's Highlights</p>
            <div className="highlights-row">
                <WindCard />
                <HumidityCard />
            </div>
            <div className="highlights-row">
                <VisibilityCard />
                <AirPressureCard />
            </div>
        </div>
    )
}

export default Dashboard;