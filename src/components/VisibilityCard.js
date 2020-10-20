import React from 'react';

const VisibilityCard = ({ visibility }) => {
    return (
        <div className="highlight-card-small">
            <p>Visibility</p>
            <p className="wind-speed"><b>{Math.round(visibility * 100) / 100}</b> miles</p>
        </div>
    )
}

export default VisibilityCard;