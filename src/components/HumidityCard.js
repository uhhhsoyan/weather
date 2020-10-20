import React from 'react';

const HumidityCard = ({ humidity }) => {
    return (
        <div className="highlight-card-large">
            <p>Humidity</p>
            <p className="wind-speed"><b>{humidity}</b>%</p>
            <div className="humidity-gauge">
                <div className="gauge-top-label-row">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>
                <div className="gauge-background"></div>
                <div className="gauge-color-meter" style={{ width: `${humidity}%` }}></div>
                <div className="gauge-bottom-label-row">%</div>
                
            </div>
        </div>
    )
}

export default HumidityCard;