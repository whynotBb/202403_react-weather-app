import React from "react";

const WeatherButton = ({ getCurrentLocation, getCityName }) => {
    const citys = ["jeju", "osaka", "new york", "paris", "busan"];
    return (
        <ul className="city_btn_box">
            <li>
                <button onClick={getCurrentLocation}>Current Location</button>
            </li>
            {citys.map((item, index) => (
                <li key={index}>
                    <button onClick={() => getCityName(item)}>{item}</button>
                </li>
            ))}
        </ul>
    );
};

export default WeatherButton;
