import { useEffect, useState } from "react";


export const useFetch = (weather) => {
    const appid = "64e269369a377ab327de5a052b008e9a";

    const [state, setState] = useState(null);

    useEffect(() => {
        if (weather != null) {
            const coords = weather.coord;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${appid}`)
                .then((response) => {
                    if (response.status >= 200 && response.status <= 299) {
                        return response.json();
                    } else {
                        throw Error(response.statusText);
                    }
                })
                .then((extendedData) => {
                    setState(extendedData);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [weather]);
    return state;


    // const isMounted = useRef(true);

    // const [state, setstate] = useState({ data: null, loading: true, error: null });

    // useEffect(() => {
    //     return () => {
    //         isMounted.current = false;
    //     }
    // }, [])


    // useEffect(() => {

    //     setstate({
    //         data: null,
    //         loading: true,
    //         error: null
    //     })

    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(data => {

    //             if (isMounted.current) {
    //                 setstate({
    //                     loading: false,
    //                     error: null,
    //                     data
    //                 })
    //             } else {
    //                 console.log('setState no se llamó');
    //             }
    //         })
    // }, [url]);

    // return state;
}
