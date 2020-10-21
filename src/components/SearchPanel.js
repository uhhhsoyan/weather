import React, { useState, useEffect } from 'react';
import metaweather from '../api/metaweather';

//const SAMPLE_SAN = [{"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964"},{"title":"San Diego","location_type":"City","woeid":2487889,"latt_long":"32.715691,-117.161720"},{"title":"San Jose","location_type":"City","woeid":2488042,"latt_long":"37.338581,-121.885567"},{"title":"San Antonio","location_type":"City","woeid":2487796,"latt_long":"29.424580,-98.494614"},{"title":"Santa Cruz","location_type":"City","woeid":2488853,"latt_long":"36.974018,-122.030952"},{"title":"Santiago","location_type":"City","woeid":349859,"latt_long":"-33.463039,-70.647942"},{"title":"Santorini","location_type":"City","woeid":56558361,"latt_long":"36.406651,25.456530"},{"title":"Santander","location_type":"City","woeid":773964,"latt_long":"43.461498,-3.810010"},{"title":"Busan","location_type":"City","woeid":1132447,"latt_long":"35.170429,128.999481"},{"title":"Santa Cruz de Tenerife","location_type":"City","woeid":773692,"latt_long":"28.46163,-16.267059"},{"title":"Santa Fe","location_type":"City","woeid":2488867,"latt_long":"35.666431,-105.972572"}]

const SearchPanel = ({ showSearch, setShowSearch, updateLocation }) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState(null);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await metaweather.get('/search', {
                params: {
                    query: debouncedTerm
                }
            })
            setResults(data);
        };
        search()
    }, [debouncedTerm])

    const onSubmit = (result) => {
        setShowSearch(false)
        updateLocation(result)
    }
    

    const renderResults = (results) => {
        if (!results) {
            return null
        }
        return results.map(result => <a key={result.woeid} className="search-list-item" onClick={() => onSubmit(result)}>{result.title}</a>)
    }

    return (
        <div className="search-panel-container" style={showSearch ? { display : 'block' } : { display: 'none' }}>
            <a className="search-exit" onClick={() => setShowSearch(false)}>X</a>
            <input 
                className="search-input"
                placeholder="search location"
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
            {renderResults(results)}
        </div>            
    )

}

export default SearchPanel;



/*
<div className="search-panel-container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div> 
        </div>   
*/
