function AlertCard({ title, message, type = "warning", icon = "⚠️" }) {
  return (
    <div className={`alert-card ${type}`}>
      <div className="alert-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default AlertCard;