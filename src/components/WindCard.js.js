import React from 'react';

const WindCard = () => {
    return (
        <div className="highlight-card-large">
            <p>Wind Speed</p>
            <p className="wind-speed"><b>7</b> mph</p>
            <div className="wind-direction">
                <div className="wind-direction-pointer"><i className="material-icons">navigation</i></div>
                <p>WSW</p>
            </div>
        </div>
    )
}

export default WindCard;