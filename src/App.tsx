import { useState } from "react";
import type { Household } from "./types/Household";
import "./App.css";

function App() {
  const [householdName, setHouseholdName] = useState("");
  const [household, setHousehold] = useState<Household | null>(null);
  const [showMembersScreen, setShowMembersScreen] = useState(false);

  const [memberName, setMemberName] = useState("");

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
          <p>⬜ Add Members</p>
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