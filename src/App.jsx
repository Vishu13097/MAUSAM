import { useState } from "react";

import Welcome from "./pages/Welcome";
import PersonaSelection from "./pages/PersonaSelection";
import Dashboard from "./pages/Dashboard";

function App() {

  const [screen, setScreen] = useState("welcome");

  const [selectedPersonas, setSelectedPersonas] =
    useState([]);

  const start = () => {
    setScreen("selection");
  };

  const showDashboard = () => {
    setScreen("dashboard");
  };

  const goBackToSelection = () => {
    setScreen("selection");
  };

  if (screen === "welcome") {
    return (
      <Welcome onStart={start} />
    );
  }

  if (screen === "selection") {
    return (
      <PersonaSelection
        selectedPersonas={selectedPersonas}
        setSelectedPersonas={setSelectedPersonas}
        onContinue={showDashboard}
      />
    );
  }

  return (
    <Dashboard
      selectedPersonas={selectedPersonas}
      onBack={goBackToSelection}
    />
  );
}

export default App;