import React, { useEffect } from 'react';
import { DailyChart } from './DailyChart';

import { useFetch } from '../hooks/useFetch';

export const Charts = ({ weather, setLoadingCharts, loadingCharts }) => {
    const weatherExtended = useFetch(weather, setLoadingCharts);

    useEffect(() => {
        setLoadingCharts(false);
    }, [weatherExtended]);


    return (
        <div className="charts col-md-8">
            {loadingCharts ? <p className="animate__animated animate__pulse animate__infinite">Cargando pronóstico</p> : (weather != null && (
                <DailyChart weatherExtended={weatherExtended.daily} />
            ))}
        </div>
    )
}


