import React from 'react';

const ICON_MAP = {
    sn: 'Snow.png',
    sl: 'Sleet.png',
    h: 'Hail.png',
    t: 'Thunderstorm.png',
    hr: 'HeavyRain.png',
    lr: 'LightRain.png',
    s: 'Shower.png',
    hc: 'HeavyCloud.png',
    lc: 'LightCloud.png',
    c: 'Clear.png'
};

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TodayPanel = (props) => {
    const { location, weatherToday } = props;

    const launchSearch = () => {
        console.log("Launch search was clicked")
    }

    const launchGeoLocation = () => {
        console.log("Launch geolocation was clicked")
    }

    const renderDate = () => {
        var d = new Date();
        return `Today  -  ${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`
    }
    
    return (
        <div className="today-container">
            <div className="today-search-row">
                <a href="#0" className="search-launch-btn" onClick={launchSearch}>Search for places</a>
                <a href="#0" className="geo-location-btn" onClick={launchGeoLocation}><i className="material-icons">gps_fixed</i></a>
            </div>
            <img className="today-icon" src={require(`../assets/${ICON_MAP[weatherToday.weather_state_abbr]}`)} alt="weather icon" />
            <p className="today-temp"><b>{Math.round(weatherToday.the_temp)}</b>&deg;C</p>
            <p className="today-type">{weatherToday.weather_state_name}</p>
            <p className="today-details">{renderDate()}</p>
            <p className="today-details"><i className="material-icons">location_on</i>{location}</p>
        </div>
    )
}

export default TodayPanel;