import React from 'react';
import TodayPanel from './TodayPanel';
import Dashboard from './Dashboard';

const App = () => {
    return (
        <div className="app-container">
            <TodayPanel 
                icon="../assets/Shower.png" 
                temp="15"
                type="Shower"
                date="Today  -  Fri, 5 Jun"
                location="Helsinki"
            />
            <Dashboard/>
        </div>
    )
}

export default App;