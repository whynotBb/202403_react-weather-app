import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import { ScaleLoader } from "react-spinners";

function App() {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWetherData] = useState();
    // 도시별
    const cities = ["jeju", "osaka", "new york", "paris", "busan"];
    const [city, setCity] = useState("");

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    const apiKey = "6dd95cfc5f180ab7bf62671b417e6c68";
    const getWeatherByCurrentLocation = async (lat, lon) => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            setLoading(false);
            let response = await fetch(url);
            let data = await response.json();
            if (data.cod === 200) {
                setWetherData(data);
                setLoading(true);
                setCity("");
            } else {
                console.log(data.cod, data.message);
                setLoading(true);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    const getWeatherByCityName = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            setLoading(false);
            let response = await fetch(url);
            let data = await response.json();
            if (data.cod === 200) {
                setWetherData(data);
                setLoading(true);
            } else {
                console.log(data.cod, data.message);
                setLoading(true);
            }
        } catch (error) {
            console.error("error", error);
        }
    };
    useEffect(() => {
        if (city === "") {
            getCurrentLocation();
        } else {
            getWeatherByCityName();
        }
    }, [city]);

    return (
        <div
            className={`body_wrap weatherBg_${weatherData?.weather[0]?.id
                ?.toString()
                ?.charAt(0)} ${
                weatherData?.weather[0]?.main === "Clear" && "clear"
            }`}
        >
            <div className="weather_box_wrap">
                {!loading ? (
                    <div className="spiner">
                        <ScaleLoader
                            color="rgba(54, 215, 183, 0.8)"
                            loading={!loading}
                            size={35}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                ) : (
                    <>
                        <WeatherBox weatherData={weatherData} />
                        <WeatherButton
                            city={city}
                            cities={cities}
                            setCity={setCity}
                            getCurrentLocation={getCurrentLocation}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
