import React, { useEffect, useState } from 'react';
import TodayPanel from './TodayPanel';
import Dashboard from './Dashboard';
//import SearchPanel from './SearchPanel';
import metaweather from '../api/metaweather';

//const SAMPLE_SF = {"consolidated_weather":[{"id":5661336785649664,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"W","created":"2020-10-20T18:20:17.101519Z","applicable_date":"2020-10-20","min_temp":12.665,"max_temp":21.595,"the_temp":21.28,"wind_speed":2.8218486353667913,"wind_direction":274.14545730160114,"air_pressure":1012.5,"humidity":63,"visibility":14.79546945836316,"predictability":68},{"id":5378094362787840,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"W","created":"2020-10-20T18:20:20.164704Z","applicable_date":"2020-10-21","min_temp":14.07,"max_temp":20.53,"the_temp":21.825000000000003,"wind_speed":3.767120412015165,"wind_direction":281.1051880468066,"air_pressure":1009.5,"humidity":59,"visibility":16.143223574325937,"predictability":68},{"id":6575634726780928,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"N","created":"2020-10-20T18:20:22.985180Z","applicable_date":"2020-10-22","min_temp":13.805,"max_temp":22.03,"the_temp":21.58,"wind_speed":3.4412180160820807,"wind_direction":350.44968470835846,"air_pressure":1010.0,"humidity":43,"visibility":15.932889425753599,"predictability":68},{"id":4842486305390592,"weather_state_name":"Clear","weather_state_abbr":"c","wind_direction_compass":"WSW","created":"2020-10-20T18:20:26.055341Z","applicable_date":"2020-10-23","min_temp":13.64,"max_temp":18.565,"the_temp":18.17,"wind_speed":4.281781933025797,"wind_direction":255.93437834481736,"air_pressure":1013.5,"humidity":60,"visibility":14.010366956971287,"predictability":68},{"id":4714779613593600,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"WSW","created":"2020-10-20T18:20:29.147558Z","applicable_date":"2020-10-24","min_temp":12.629999999999999,"max_temp":16.395,"the_temp":16.92,"wind_speed":7.295825642853733,"wind_direction":239.58787776156964,"air_pressure":1014.5,"humidity":73,"visibility":14.67865167422254,"predictability":70},{"id":4837260940804096,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"NNE","created":"2020-10-20T18:20:31.985145Z","applicable_date":"2020-10-25","min_temp":12.165,"max_temp":17.07,"the_temp":15.85,"wind_speed":4.569419390757973,"wind_direction":18.999999999999996,"air_pressure":1014.0,"humidity":65,"visibility":9.999726596675416,"predictability":70}],"time":"2020-10-20T12:34:39.448912-07:00","sun_rise":"2020-10-20T07:23:31.464018-07:00","sun_set":"2020-10-20T18:25:55.368947-07:00","timezone_name":"LMT","parent":{"title":"California","location_type":"Region / State / Province","woeid":2347563,"latt_long":"37.271881,-119.270233"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964","timezone":"US/Pacific"}
//const SAMPLE_LONDON = {"consolidated_weather":[{"id":5478291990380544,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"SSW","created":"2020-10-20T21:20:02.451485Z","applicable_date":"2020-10-20","min_temp":11.945,"max_temp":18.32,"the_temp":17.935,"wind_speed":8.701218742946525,"wind_direction":195.8398426633211,"air_pressure":1002.0,"humidity":70,"visibility":9.525931062594449,"predictability":75},{"id":5211885168230400,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2020-10-20T21:20:08.990806Z","applicable_date":"2020-10-21","min_temp":13.129999999999999,"max_temp":16.18,"the_temp":15.265,"wind_speed":8.18337060311249,"wind_direction":234.771658739869,"air_pressure":994.0,"humidity":87,"visibility":6.658613696015271,"predictability":77},{"id":6473519396290560,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SW","created":"2020-10-20T21:20:02.575278Z","applicable_date":"2020-10-22","min_temp":11.09,"max_temp":16.27,"the_temp":15.58,"wind_speed":8.433723077173308,"wind_direction":233.8012841165451,"air_pressure":1008.5,"humidity":71,"visibility":10.659933488427583,"predictability":73},{"id":5490642974146560,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"WSW","created":"2020-10-20T21:20:02.651992Z","applicable_date":"2020-10-23","min_temp":8.235,"max_temp":13.08,"the_temp":13.29,"wind_speed":7.090092332964819,"wind_direction":239.35627713712782,"air_pressure":1009.5,"humidity":74,"visibility":12.76544977332379,"predictability":75},{"id":5341304411127808,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"SSW","created":"2020-10-20T21:20:02.849587Z","applicable_date":"2020-10-24","min_temp":7.66,"max_temp":15.315000000000001,"the_temp":14.59,"wind_speed":11.485214559582703,"wind_direction":202.16666619657508,"air_pressure":1010.0,"humidity":77,"visibility":10.190487552692277,"predictability":75},{"id":5875957240954880,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2020-10-20T21:20:05.168876Z","applicable_date":"2020-10-25","min_temp":10.08,"max_temp":14.525,"the_temp":13.18,"wind_speed":7.901930128052175,"wind_direction":218.5,"air_pressure":1000.0,"humidity":69,"visibility":9.268372703412073,"predictability":77}],"time":"2020-10-20T22:50:03.816102+01:00","sun_rise":"2020-10-20T07:33:41.884295+01:00","sun_set":"2020-10-20T17:55:54.990136+01:00","timezone_name":"LMT","parent":{"title":"England","location_type":"Region / State / Province","woeid":24554868,"latt_long":"52.883560,-1.974060"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714","timezone":"Europe/London"}

const App = () => {
    const [weatherData, setWeatherData] = useState(''); // change back to null
    const [woeid, setWoeid] = useState('2487956'); // Where On Earth ID - default San Francisco

    
    useEffect(() => {
        const search = async () => {
            const { data } = await metaweather.get(`/${woeid}`)
            setWeatherData(data);
        };
        search()
    }, [woeid]);
    

    const updateLocation = (searchResult) => {
        setWoeid(searchResult.woeid);
    };

    return (
        <div>
            {!weatherData ? null :
                <div className="app-container">
                    <TodayPanel
                        location={weatherData.title}
                        updateLocation={updateLocation}
                        weatherToday={weatherData.consolidated_weather[0]}
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