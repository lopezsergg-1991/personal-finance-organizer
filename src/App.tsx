import { useState } from "react";
import "./App.css";

function App() {
  const [householdName, setHouseholdName] = useState("");
  const [createdHousehold, setCreatedHousehold] = useState("");
  const [showMembersScreen, setShowMembersScreen] = useState(false);

  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState<string[]>([]);

  const handleContinue = () => {
    if (!householdName.trim()) {
      return;
    }

    setCreatedHousehold(householdName);
  };

  const handleAddMember = () => {
    if (!memberName.trim()) {
      return;
    }

    setMembers([...members, memberName]);
    setMemberName("");
  };

  if (showMembersScreen) {
    return (
      <main className="container">
        <h1>{createdHousehold}</h1>

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
          {members.map((member, index) => (
            <p key={index}>✅ {member}</p>
          ))}
        </div>
      </main>
    );
  }

  if (createdHousehold) {
    return (
      <main className="container">
        <h1>{createdHousehold}</h1>

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