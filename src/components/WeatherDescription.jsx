import React from 'react';

export const WeatherDescription = ({ weather }) => {

    // let name = "";
    // let temp = "";
    // let country = "";


    const name = weather.name;
    const temp = weather.main.temp;
    const country = weather.sys.country;
    const icon = weather.weather[0].icon;
    const clima = weather.weather[0].description;

    return (
        <div className="weather-description daily animate__animated animate__fadeIn" >
            <h2>{name}, {country}</h2>
            <p className="temp">{temp}ºC</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="clima" />
            <p className="weather">{clima}</p>
        </div >
    )
}
