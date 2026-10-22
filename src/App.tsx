import { useState } from "react";
import "./App.css";

function App() {
  const [householdName, setHouseholdName] = useState("");
  const [createdHousehold, setCreatedHousehold] = useState("");

  const handleContinue = () => {
    setCreatedHousehold(householdName);
  };

  return (
    <main className="container">
      <h1>Personal Finance Organizer</h1>

      <h2>Welcome</h2>

      <p>Let's create your household.</p>

      <div>
        <label>Household Name</label>

        <br />

        <input
          type="text"
          placeholder="Household Name"
          value={householdName}
          onChange={(e) => setHouseholdName(e.target.value)}
        />

        <br />

        <button onClick={handleContinue}>
          Continue
        </button>
      </div>

      {createdHousehold && (
        <div style={{ marginTop: "24px" }}>
          <h3>Household Created</h3>
          <p>{createdHousehold}</p>
        </div>
      )}
    </main>
  );
}

export default App;
