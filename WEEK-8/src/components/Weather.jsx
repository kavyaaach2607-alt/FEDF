import React, { useState, useEffect } from "react";

function Weather() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async () => {

    try {

      setLoading(true);

      // Sample Weather Data API
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }

      const data = await response.json();

      setWeather(data.current_weather);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchWeather();

  }, []);

  if (loading) {
    return <h2>Loading Weather Information...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
  <div className="weather-container">
    <div className="circle circle1"></div>
    <div className="circle circle2"></div>
    <div className="weather-card">
      <h1>Weather Information System</h1>

      <div className="location">
        📍 Location: Hyderabad
      </div>

      <div className="weather-grid">
        <div className="info-card">
          <div className="icon">🌡️</div>
          <h3>Temperature</h3>
          <p>{weather.temperature} °C</p>
        </div>

        <div className="info-card">
          <div className="icon">💨</div>
          <h3>Wind Speed</h3>
          <p>{weather.windspeed} km/h</p>
        </div>

        <div className="info-card">
          <div className="icon">🧭</div>
          <h3>Wind Direction</h3>
          <p>{weather.winddirection}°</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Weather;