import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import AlertCard from "../components/AlertCard";
import { weatherData } from "../data/weather";
import { personas } from "../data/personas";

function Dashboard({ selectedPersonas, onBack }) {

  const selected = personas.filter((persona) =>
    selectedPersonas.includes(persona.id)
  );

  const widgets = [
    ...new Set(
      selected.flatMap((persona) => persona.widgets)
    ),
  ];

  const renderWidget = (widget) => {

    switch (widget) {

      case "aqi":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">❤️</div>

            <div>
              <span>Air Quality</span>
              <strong>{weatherData.aqi}</strong>
              <small>Moderate AQI</small>
            </div>
          </div>
        );

      case "uv":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">☀️</div>

            <div>
              <span>UV Index</span>
              <strong>{weatherData.uv}</strong>
              <small>High</small>
            </div>
          </div>
        );

      case "humidity":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">💧</div>

            <div>
              <span>Humidity</span>
              <strong>{weatherData.current.humidity}%</strong>
              <small>Current humidity</small>
            </div>
          </div>
        );

      case "running":
        return (
          <div className="card feature-card" key={widget}>
            <div className="feature-icon">
              🏃
            </div>

            <div>
              <span>Best Running Hours</span>
              <strong>
                {weatherData.runningHours}
              </strong>
              <small>
                Comfortable conditions
              </small>
            </div>
          </div>
        );

      case "wind":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">
              💨
            </div>

            <div>
              <span>Wind Speed</span>
              <strong>
                {weatherData.current.wind} km/h
              </strong>
              <small>Light breeze</small>
            </div>
          </div>
        );

      case "heat":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">
              🌡️
            </div>

            <div>
              <span>Heat Level</span>
              <strong>
                {weatherData.heatLevel}
              </strong>
              <small>Stay hydrated</small>
            </div>
          </div>
        );

      case "school":
        return (
          <AlertCard
            key={widget}
            title="School Commute"
            message={
              weatherData.schoolCommute.message
            }
            icon="🏫"
          />
        );

      case "rain":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">
              🌧️
            </div>

            <div>
              <span>Rain Probability</span>
              <strong>
                {weatherData.rainProbability}%
              </strong>
              <small>Possible rainfall</small>
            </div>
          </div>
        );

      case "visibility":
        return (
          <div className="card metric-card" key={widget}>
            <div className="metric-icon">
              👁️
            </div>

            <div>
              <span>Visibility</span>
              <strong>
                {weatherData.current.visibility} km
              </strong>
              <small>Good visibility</small>
            </div>
          </div>
        );

      case "weatherAlert":

        if (!weatherData.alerts.rain) {
          return null;
        }

        return (
          <AlertCard
            key={widget}
            title="Weather Alert"
            message="Rain is expected later today. Plan outdoor activities accordingly."
            icon="⚠️"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-page">

      <Header />

      <main className="dashboard-content">

        <div className="dashboard-top">

          <div>
            <span className="eyebrow">
              PERSONALIZED FOR YOU
            </span>

            <h1>
              Good evening 👋
            </h1>

            <p>
              Here's what matters to you today.
            </p>
          </div>

          <button
            className="change-button"
            onClick={onBack}
          >
            ⚙ Change interests
          </button>

        </div>

        <div className="active-personas">

          {selected.map((persona) => (
            <span key={persona.id}>
              {persona.icon} {persona.name}
            </span>
          ))}

        </div>

        <div className="dashboard-grid">

          <WeatherCard weather={weatherData} />

          {widgets.map((widget) =>
            renderWidget(widget)
          )}

        </div>

        <div className="automation-section">

          <div className="automation-icon">
            ✨
          </div>

          <div>
            <h2>
              Mausam personalized your day
            </h2>

            <p>
              Your homepage automatically prioritizes
              information based on your selected interests.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;