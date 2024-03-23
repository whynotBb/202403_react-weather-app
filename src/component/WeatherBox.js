import React from "react";

const WeatherBox = ({ weatherData }) => {
    return (
        <div className="weather_box">
            <h2>{weatherData?.name}</h2>
            <h3>
                {weatherData?.main.temp} °C /
                {(weatherData?.main.temp * 1.8 + 32).toFixed(2)}
                °F
            </h3>
            <div>
                <p>{weatherData?.weather[0].description}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default WeatherBox;
