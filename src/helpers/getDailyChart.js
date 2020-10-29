import Chart from 'chart.js';

export const getDailyChart = (weatherExtended) => {
    const temps = weatherExtended.map((day) => {
        return day.temp.day;
    });

    const pop = weatherExtended.map((day) => {

        return day.pop * 100;
    });

    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miércoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";

    const currentDay = d.getDay();

    const getDays = (currentDay) => {
        let days = [];

        for (let i = currentDay; i < 7; i++) {
            days.push(weekday[i]);
        }
        if (days.length !== 7) {
            for (let i = 0; i < currentDay; i++) {
                days.push(weekday[i]);
            }
        }
        return days;
    }


    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: getDays(currentDay),
            datasets: [
                {
                    label: "Temperatura en ºC",
                    data: temps,
                    backgroundColor: [
                        "#a1c18100"
                    ],
                    borderWidth: 1,
                    borderColor: "#c8553d",
                    yAxisID: "y-axis-1"
                },
                {
                    label: "Probabilidad de precipitaciones en %",
                    data: pop,
                    type: "bar",
                    backgroundColor: [
                        "#a1c181bb", "#a1c181bb", "#a1c181bb", "#a1c181bb", "#a1c181bb", "#a1c181bb", "#a1c181bb"
                    ],
                    borderWidth: 1,
                    yAxisID: "y-axis-2",
                }
            ]
        },
        options: {

            scales: {
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "y-axis-1"
                },
                {
                    type: "linear",
                    display: true,
                    position: "right",
                    id: "y-axis-2"
                }]
            }
        }

    });

}


