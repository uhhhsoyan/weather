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

const ForecastCard = ({ tomorrow, weather }) => {
    const renderDate = (date) => {
        var d = new Date(date);
        return `${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`
    }

    return (
        <div className="forecast-card">
            <p>{tomorrow ? 'Tomorrow' : renderDate(weather.applicable_date)}</p>
            <img className="fcast-card-icon" src={require(`../assets/${ICON_MAP[weather.weather_state_abbr]}`)} alt="weather icon" />
            <div className="fcast-hi-lo">
                <p className="fcast-hi">{Math.round(weather.max_temp)}&deg;C</p>
                <p className="fcast-lo">{Math.round(weather.min_temp)}&deg;C</p>
            </div>
        </div>
    )
}

export default ForecastCard;
