import React from 'react';

const WindCard = ({ speed, direction, direction_compass }) => {
    return (
        <div className="highlight-card-large">
            <p>Wind Speed</p>
            <p className="wind-speed"><b>{Math.round(speed)}</b> mph</p>
            <div className="wind-direction">
                <div className="wind-direction-pointer" style={{ transform: `rotate(${direction}deg)`}}><i className="material-icons">navigation</i></div>
                <p>{direction_compass}</p>
            </div>
        </div>
    )
}

export default WindCard;