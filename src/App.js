import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
// import weatherDescKo from "./data/weatherDescKo";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWetherData] = useState();
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    useEffect(() => {
        getCurrentLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getWeatherByCurrentLocation = async (lat, lon) => {
        const apiKey = "6dd95cfc5f180ab7bf62671b417e6c68";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data", data);
        setWetherData(data);
        setIsLoading(true);
    };

    const getCityName = (city) => {
        getWeatherByCityName(city);
    };
    const getWeatherByCityName = async (city) => {
        const apiKey = "6dd95cfc5f180ab7bf62671b417e6c68";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data", data);
        setWetherData(data);
    };
    return (
        <div
            className={`body_wrap weatherBg_${weatherData?.weather[0]?.id
                ?.toString()
                ?.charAt(0)} ${
                weatherData?.weather[0]?.main === "Clear" && "clear"
            }`}
        >
            {!isLoading ? (
                <p>loading...</p>
            ) : (
                <>
                    <div className="weather_box_wrap">
                        <WeatherBox weatherData={weatherData} />
                        <WeatherButton
                            getCurrentLocation={getCurrentLocation}
                            getCityName={getCityName}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
