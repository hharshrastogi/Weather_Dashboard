import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.main) return null;

  const {
    name,
    main: { temp, humidity, feels_like, pressure },
    weather,
    wind: { speed },
    visibility,
    sys: { sunrise, sunset, country },
  } = weatherData;

  const formatUnixTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-6 w-full md:w-[400px] space-y-4">
      <h2 className="text-2xl font-semibold">
        {name}, <span className="text-gray-500 text-lg">{country}</span>
      </h2>
      <p className="text-4xl font-bold">{temp.toFixed(1)}°C</p>
      <p className="capitalize">{weather[0].description}</p>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mt-2">
        <p>Feels Like: {feels_like.toFixed(1)}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {speed} km/h</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Visibility: {(visibility / 1000).toFixed(1)} km</p>
        <p>Sunrise: {formatUnixTime(sunrise)}</p>
        <p>Sunset: {formatUnixTime(sunset)}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
