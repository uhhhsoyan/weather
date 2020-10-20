import React from 'react';
import ForecastCard from './ForecastCard';
import WindCard from './WindCard.js';
import HumidityCard from './HumidityCard';
import VisibilityCard from './VisibilityCard';
import AirPressureCard from './AirPressureCard';

const Dashboard = ({ forecast }) => {
    const highlight = forecast[0];

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
                <ForecastCard tomorrow weather={forecast[1]} />
                <ForecastCard tomorrow={false} weather={forecast[2]} />
                <ForecastCard tomorrow={false} weather={forecast[3]} />
                <ForecastCard tomorrow={false} weather={forecast[4]} />
                <ForecastCard tomorrow={false} weather={forecast[5]} />
            </div>
            <p className="highlights-title">Today's Highlights</p>
            <div className="highlights-row">
                <WindCard 
                    speed={highlight.wind_speed}
                    direction={highlight.wind_direction}
                    direction_compass={highlight.wind_direction_compass}
                />
                <HumidityCard 
                    humidity={highlight.humidity}
                />
            </div>
            <div className="highlights-row">
                <VisibilityCard 
                    visibility={highlight.visibility}
                />
                <AirPressureCard 
                    airPressure={highlight.air_pressure}
                />
            </div>
        </div>
    )
}

export default Dashboard;