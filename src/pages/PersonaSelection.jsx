import PersonaCard from "../components/PersonaCard";
import { personas } from "../data/personas";

function PersonaSelection({
  selectedPersonas,
  setSelectedPersonas,
  onContinue,
}) {
  const togglePersona = (id) => {
    if (selectedPersonas.includes(id)) {
      setSelectedPersonas(
        selectedPersonas.filter((persona) => persona !== id)
      );
    } else {
      setSelectedPersonas([
        ...selectedPersonas,
        id,
      ]);
    }
  };

  return (
    <div className="selection-page">

      <div className="selection-header">
        <div className="small-logo">
          ☁️ MAUSAM
        </div>

        <div className="step">
          STEP 1 OF 2
        </div>
      </div>

      <div className="selection-content">

        <span className="eyebrow">
          PERSONALIZE YOUR EXPERIENCE
        </span>

        <h1>
          What matters to you?
        </h1>

        <p className="selection-description">
          Select one or more interests. Mausam will
          personalize your homepage around them.
        </p>

        <div className="persona-grid">

          {personas.map((persona) => (
            <PersonaCard
              key={persona.id}
              persona={persona}
              selected={selectedPersonas.includes(persona.id)}
              onClick={() => togglePersona(persona.id)}
            />
          ))}

        </div>

        <div className="selection-bottom">

          <span>
            {selectedPersonas.length} selected
          </span>

          <button
            className="primary-button"
            disabled={selectedPersonas.length === 0}
            onClick={onContinue}
          >
            Create My Homepage →
          </button>

        </div>

      </div>
    </div>
  );
}

export default PersonaSelection;