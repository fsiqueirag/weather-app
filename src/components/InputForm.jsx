import React from 'react';
import { useForm } from '../hooks/useForm';
import { getWeather } from '../helpers/getWeather';

export const InputForm = ({ setWeather, setLoading, setLoadingCharts, setFetchFailed }) => {
    const [inputValue, handleInputChange, setInputValue] = useForm("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const city = inputValue;
        getWeather(city, setWeather, setLoading, setLoadingCharts, setFetchFailed);
        setInputValue("");
        setLoadingCharts(true);
        setFetchFailed(false);
        setLoading(true);
    }


    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <input
                className="form-control"
                type="text"
                placeholder="Ingresar ciudad"
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    )
}
