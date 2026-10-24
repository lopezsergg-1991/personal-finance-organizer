import { useEffect, useState } from "react";
import type { Household } from "./types/Household";
import { loadHousehold, saveHousehold } from "./services/householdStorage";
import "./App.css";

function App() {
  const [householdName, setHouseholdName] = useState("");
  const [household, setHousehold] = useState<Household | null>(null);

  const [showMembersScreen, setShowMembersScreen] = useState(false);
  const [showIncomeScreen, setShowIncomeScreen] = useState(false);

  const [memberName, setMemberName] = useState("");

  useEffect(() => {
    const existingHousehold = loadHousehold();

    if (existingHousehold) {
      setHousehold(existingHousehold);
    }
  }, []);

  useEffect(() => {
    if (household) {
      saveHousehold(household);
    }
  }, [household]);

  const handleContinue = () => {
    if (!householdName.trim()) {
      return;
    }

    setHousehold({
      name: householdName,
      members: [],
    });
  };

  const handleAddMember = () => {
    if (!household || !memberName.trim()) {
      return;
    }

    setHousehold({
      ...household,
      members: [...household.members, memberName],
    });

    setMemberName("");
  };

  if (showIncomeScreen && household) {
    return (
      <main className="container">
        <h1>{household.name}</h1>

        <h2>Add Income</h2>

        <p>
          Income setup will be implemented next.
        </p>

        <p>✅ Household Created</p>
        <p>✅ Members Added</p>
        <p>🚧 Income Setup In Progress</p>
      </main>
    );
  }

  if (showMembersScreen && household) {
    return (
      <main className="container">
        <h1>{household.name}</h1>

        <h2>Add Members</h2>

        <p>
          Add the people who belong to this household.
        </p>

        <input
          type="text"
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />

        <br />

        <button onClick={handleAddMember}>
          Add Member
        </button>

        <div style={{ marginTop: "24px" }}>
          {household.members.map((member, index) => (
            <p key={index}>✅ {member}</p>
          ))}
        </div>

        <br />

        <button
          onClick={() => setShowIncomeScreen(true)}
        >
          Continue
        </button>
      </main>
    );
  }

  if (household) {
    return (
      <main className="container">
        <h1>{household.name}</h1>

        <h2>Getting Started</h2>

        <div>
          <p>✅ Household Created</p>

          <p>
            {household.members.length > 0
              ? "✅ Add Members"
              : "⬜ Add Members"}
          </p>

          <p>⬜ Add Income</p>
          <p>⬜ Add Expenses</p>
          <p>⬜ Complete First Review</p>

          <br />

          <button onClick={() => setShowMembersScreen(true)}>
            Continue Setup
          </button>
        </div>
      </main>
    );
  }

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
          placeholder="Enter household name"
          value={householdName}
          onChange={(e) => setHouseholdName(e.target.value)}
        />

        <br />

        <button onClick={handleContinue}>
          Continue
        </button>
      </div>
    </main>
  );
}

export default App;
