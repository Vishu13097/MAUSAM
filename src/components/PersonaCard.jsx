function PersonaCard({ persona, selected, onClick }) {
  return (
    <button
      className={`persona-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="persona-icon">
        {persona.icon}
      </div>

      <div className="persona-info">
        <h3>{persona.name}</h3>
        <p>{persona.description}</p>
      </div>

      <div className="check">
        {selected ? "✓" : ""}
      </div>
    </button>
  );
}

export default PersonaCard;