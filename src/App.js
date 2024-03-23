import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [weathreData, setWetherData] = useState();
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
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data", data);
        setWetherData(data);
    };
    return (
        <div className="body_wrap">
            <div className="video_bg">
                <video
                    src="resource/video/rainy_weather_at_the_field.mp4"
                    muted
                    autoPlay
                    loop
                ></video>
            </div>
            <div className="weather_box_wrap">
                <div className="weather_box">
                    {weathreData?.main.temp}
                    <h2>도시</h2>
                    <h3>온도</h3>
                    <h4>요약</h4>
                </div>
                <ul className="city_btn_box">
                    <li>
                        <button>Current Location</button>
                    </li>
                    <li>
                        <button>jeju</button>
                    </li>
                    <li>
                        <button>osaka</button>
                    </li>
                    <li>
                        <button>new york</button>
                    </li>
                    <li>
                        <button>paris</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
