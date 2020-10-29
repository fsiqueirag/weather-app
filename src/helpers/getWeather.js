
export const getWeather = (city, setWeather, setLoading, setLoadingCharts, setFetchFailed) => {

    const appid = "64e269369a377ab327de5a052b008e9a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        city
    )}&units=metric&appid=${appid}&lang=es`;


    fetch(url)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((data) => {
            setWeather(data);

        }).catch((error) => {
            console.log(error);
            setLoading(false);
            setLoadingCharts(false);
            setFetchFailed(true);
            setWeather(undefined);
        });



    // const [state, setState] = useState({
    //     name: "",
    //     main: {
    //         temp: ""
    //     },
    //     sys: {
    //         country: ""
    //     }
    // });


    // if (data.cod === "400") {
    //     data = {
    //         coord: {
    //             lat: 1,
    //             lon: 1
    //         }
    //     };
    // }

    // const url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&lang=es&appid=${appid}`;
    // const res = await fetch(url2);
    // const data2 = await res.json();

    // if (data.name !== undefined) {
    //   return {
    //     name: `${data.name}, ${data.sys.country}`,
    //     temp: data.main.temp + " ºC",
    //     weather: data.weather[0].description,
    //     icon: data.weather[0].icon,
    //     hourly: data2.hourly
    //   };
    // } else {
    //   return {
    //     name: "",
    //     temp: "",
    //     weather: "",
    //     icon: ""
    //   };
    // }
};
