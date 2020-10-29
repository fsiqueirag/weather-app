import React, { useEffect } from 'react';

import { getDailyChart } from '../helpers/getDailyChart';

export const DailyChart = ({ weatherExtended }) => {

    useEffect(() => {
        getDailyChart(weatherExtended);

    }, [weatherExtended])





    return (
        <div className="daily animate__animated animate__fadeIn">
            <h2>Pronóstico</h2>
            <canvas id="myChart"></canvas>
        </div>
    )
}
