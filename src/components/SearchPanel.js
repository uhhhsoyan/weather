import React, { useState, useEffect } from 'react';
import metaweather from '../api/metaweather';

const SearchPanel = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

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

    const renderedResults = results.map((result) => {
        return (
            <p>{result.title}</p>
        )
    })
    
    return (
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
    )

}
