import { useEffect } from "react";
import "./App.css";

function App() {
    // const [isLoading, setIsLoading] = useState(true);
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    useEffect(() => {
        getCurrentLocation();
    }, []);
    const getWeatherByCurrentLocation = async (lat, lon) => {
        const apiKey = "6dd95cfc5f180ab7bf62671b417e6c68";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data", data);
    };
    // const [weatherData, setWeatherData] = useState();

    // useEffect(() => {
    //     //현재 위치 가져오기
    //     getCurrentLocation();
    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    //     )
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setIsLoading(false);
    //             return setWeatherData(data);
    //         });
    // }, []);
    // useEffect(() => {
    //     getCurrentLocation();
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    //         );
    //         const data = await response.json();
    //         setIsLoading(false);
    //         setWeatherData(data);
    //     };
    //     fetchData();
    // }, []);
    // console.log(weatherData);
    return <div>weather</div>;
}

export default App;
