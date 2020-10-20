import React, { useEffect, useState } from 'react';
import TodayPanel from './TodayPanel';
import Dashboard from './Dashboard';
import metaweather from '../api/metaweather';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [woeid, setWoeid] = useState('2487956'); // Where On Earth ID - default San Francisco

    useEffect(() => {
        const search = async () => {
            const { data } = await metaweather.get(`/${woeid}`)
            setWeatherData(data);
        };
        search()
    }, []);

    const updateLocation = (id) => {
        setWoeid(id);
    };

    return (
        <div>
            {!weatherData ? null :
                <div className="app-container">
                    <TodayPanel
                        location={weatherData.title}
                        weatherToday={weatherData.consolidated_weather[0]} 
                        updateLocation={updateLocation}
                    />
                    <Dashboard
                        forecast={weatherData.consolidated_weather}
                    />
                </div>
            }
            
        </div>
    )
}

export default App;