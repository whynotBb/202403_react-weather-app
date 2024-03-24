import React from "react";

const WeatherButton = ({ city, cities, setCity, getCurrentLocation }) => {
    console.log("city", city);
    return (
        <ul className="city_btn_box">
            <li>
                <button
                    onClick={getCurrentLocation}
                    className={city === "" ? "on" : ""}
                >
                    Current Location
                </button>
            </li>
            {cities.map((item, index) => (
                <li key={index}>
                    <button
                        onClick={() => setCity(item)}
                        className={city === item ? "on" : ""}
                    >
                        {item}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default WeatherButton;
