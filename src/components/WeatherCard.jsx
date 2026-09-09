function WeatherCard({ weather }) {
  return (
    <div className="card weather-card">
      <div className="card-title">
        <span>☀️</span>
        <span>Current Weather</span>
      </div>

      <div className="weather-main">
        <div className="temperature">
          {weather.current.temperature}°
        </div>

        <div>
          <h3>{weather.current.condition}</h3>
          <p>
            Feels like {weather.current.feelsLike}°
          </p>
        </div>
      </div>

      <div className="weather-details">
        <div>
          <span>💧</span>
          <strong>{weather.current.humidity}%</strong>
          <small>Humidity</small>
        </div>

        <div>
          <span>💨</span>
          <strong>{weather.current.wind} km/h</strong>
          <small>Wind</small>
        </div>

        <div>
          <span>👁️</span>
          <strong>{weather.current.visibility} km</strong>
          <small>Visibility</small>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;