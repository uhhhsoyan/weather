import React from 'react';

const HumidityCard = ({ humidity }) => {
    return (
        <div className="highlight-card-large">
            <p>Humidity</p>
            <p className="wind-speed"><b>{humidity}</b>%</p>
            <div className="wind-direction">
                <div className="wind-direction-pointer"><i className="material-icons">navigation</i></div>
                <p>WSW</p>
            </div>
        </div>
    )
}

export default HumidityCard;