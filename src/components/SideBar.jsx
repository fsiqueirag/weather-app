import React, { useEffect, useState } from 'react';
import { InputForm } from './InputForm';
import { WeatherDescription } from './WeatherDescription';

export const SideBar = ({ weather, setWeather, setLoadingCharts }) => {
    const [loading, setLoading] = useState(true);
    const [fetchFailed, setFetchFailed] = useState(false);


    useEffect(() => {
        setLoading(false);
    }, [weather]);


    return (
        <div className="sidebar">
            <div className="weather-description daily animate__animated animate__fadeIn">
                <h1>Weather App</h1>
                <InputForm setWeather={setWeather} setLoading={setLoading} setLoadingCharts={setLoadingCharts} setFetchFailed={setFetchFailed} />
            </div >
            {
                loading
                    ?
                    <p className="animate__animated animate__pulse animate__infinite">Cargando</p>
                    :
                    (weather != null) && <WeatherDescription weather={weather} />
            }
            {
                fetchFailed && <p>La ciudad ingresada no existe.</p>
            }
        </div>
    )
}
