import React from 'react';
import ForecastCard from './ForecastCard';

const Dashboard = () => {
    
    const launchCelsius = () => {

    }

    const launchFahrenheit = () => {

    }
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-temp-btn-row">
                <a href="#0" className="celsius-btn" onClick={launchCelsius}></a>
                <a href="#0" className="celsius-btn" onClick={launchFahrenheit}></a>
            </div>
            <div className="forecast-container">
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </div>
            <div className="highlights"></div>

        </div>
    )
}

export default Dashboard;