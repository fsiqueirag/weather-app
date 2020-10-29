import React, { useState } from 'react'
import { Charts } from './components/Charts'
import { SideBar } from './components/SideBar'

export const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [loadingCharts, setLoadingCharts] = useState(true);


    return (
        <div className="weather-app">
            <SideBar weather={weather} setWeather={setWeather} setLoadingCharts={setLoadingCharts} />
            <Charts weather={weather} setLoadingCharts={setLoadingCharts} loadingCharts={loadingCharts} />
        </div>
    )
}
