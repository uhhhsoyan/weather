import React from 'react';
import showerIcon from '../assets/Shower.png';

const TodayPanel = (props) => {
    const { icon, temp, type, date, location } = props;
    
    const launchSearch = () => {
        console.log("Launch search was clicked")
    }

    const launchGeoLocation = () => {
        console.log("Launch geolocation was clicked")
    }
    
    return (
        <div className="today-container">
            <div className="today-search-row">
                <a href="#0" className="search-launch-btn" onClick={launchSearch}>Search for places</a>
                <a href="#0" className="geo-location-btn" onClick={launchGeoLocation}><i className="material-icons">gps_fixed</i></a>
            </div>
            <img className="today-icon" src={showerIcon} alt="weather icon" />
            <p className="today-temp"><b>{temp}</b>&deg;C</p>
            <p className="today-type">{type}</p>
            <p className="today-details">{date}</p>
            <p className="today-details"><i className="material-icons">location_on</i>{location}</p>
        </div>
    )
}

export default TodayPanel;