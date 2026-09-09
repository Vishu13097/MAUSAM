function Welcome({ onStart }) {
  return (
    <div className="welcome-page">

      <div className="welcome-cloud">
        ☁️
      </div>

      <div className="welcome-content">

        <div className="logo">
          MAUSAM
        </div>

        <h1>
          Weather that
          <span> adapts to you.</span>
        </h1>

        <p>
          Get weather information that matters to your
          lifestyle, interests and daily activities.
        </p>

        <button
          className="primary-button"
          onClick={onStart}
        >
          Get Started →
        </button>

        <div className="welcome-features">
          <div>
            <span>🎯</span>
            Personalized
          </div>

          <div>
            <span>⚡</span>
            Smart Alerts
          </div>

          <div>
            <span>📍</span>
            Location Based
          </div>
        </div>

      </div>
    </div>
  );
}

export default Welcome;