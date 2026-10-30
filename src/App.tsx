import { useEffect, useState } from "react";
import type { Household } from "./types/Household";
import type { Income } from "./types/Income";
import type { Expense } from "./types/Expense";
import { loadHousehold, saveHousehold } from "./services/householdStorage";
import "./App.css";

function App() {
  const [householdName, setHouseholdName] = useState("");
  const [household, setHousehold] = useState<Household | null>(null);

  const [showMembersScreen, setShowMembersScreen] = useState(false);
  const [showIncomeScreen, setShowIncomeScreen] = useState(false);
  const [showExpenseScreen, setShowExpenseScreen] = useState(false);

  const [memberName, setMemberName] = useState("");

  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeOwner, setIncomeOwner] = useState("Household");

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseOwner, setExpenseOwner] = useState("Household");

  useEffect(() => {
    const existingHousehold = loadHousehold();

    if (existingHousehold) {
      setHousehold({
        expenses: [],
        ...existingHousehold,
      });
    }
  }, []);

  useEffect(() => {
    if (household) {
      saveHousehold(household);
    }
  }, [household]);

  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleContinue = () => {
    if (!householdName.trim()) {
      return;
    }

    setHousehold({
      name: householdName,
      members: [],
      incomes: [],
      expenses: [],
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

  const handleAddIncome = () => {
    if (
      !household ||
      !incomeName.trim() ||
      !incomeAmount.trim()
    ) {
      return;
    }

    const newIncome: Income = {
      name: incomeName,
      amount: Number(incomeAmount),
      ownerType:
        incomeOwner === "Household"
          ? "Household"
          : "Member",
      ownerName: incomeOwner,
    };

    setHousehold({
      ...household,
      incomes: [
        ...household.incomes,
        newIncome,
      ],
    });

    setIncomeName("");
    setIncomeAmount("");
    setIncomeOwner("Household");
  };

  const handleAddExpense = () => {
    if (
      !household ||
      !expenseName.trim() ||
      !expenseAmount.trim()
    ) {
      return;
    }

    const newExpense: Expense = {
      name: expenseName,
      amount: Number(expenseAmount),
      ownerType:
        expenseOwner === "Household"
          ? "Household"
          : "Member",
      ownerName: expenseOwner,
    };

    setHousehold({
      ...household,
      expenses: [
        ...household.expenses,
        newExpense,
      ],
    });

    setExpenseName("");
    setExpenseAmount("");
    setExpenseOwner("Household");
  };

  const getCurrentOnboardingStep = () => {
    if (!household) {
      return "overview";
    }

    if (household.members.length === 0) {
      return "members";
    }

    if (household.incomes.length === 0) {
      return "income";
    }

    if (household.expenses.length === 0) {
      return "expenses";
    }

    return "complete";
  };

  const handleContinueSetup = () => {
    const nextStep = getCurrentOnboardingStep();

    if (nextStep === "members") {
      setShowMembersScreen(true);
      return;
    }

    if (nextStep === "income") {
      setShowIncomeScreen(true);
      return;
    }

    if (nextStep === "expenses") {
      setShowExpenseScreen(true);
      return;
    }
  };

  if (showExpenseScreen && household) {
    return (
      <main className="container">
        <h1>{household.name}</h1>

        <h2>Add Expenses</h2>

        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder="Monthly Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />

        <br />

        <select
          value={expenseOwner}
          onChange={(e) => setExpenseOwner(e.target.value)}
        >
          <option value="Household">
            Household
          </option>

          {household.members.map((member) => (
            <option
              key={member}
              value={member}
            >
              {member}
            </option>
          ))}
        </select>

        <br />

        <button onClick={handleAddExpense}>
          Add Expense
        </button>

        <div style={{ marginTop: "24px" }}>
          {household.expenses.map((expense, index) => (
            <p key={index}>
              ✅ {expense.name}
              {" - "}
              ${expense.amount}
              {" - "}
              {expense.ownerName}
            </p>
          ))}
        </div>
      </main>
    );
  }

  if (showIncomeScreen && household) {
    return (
      <main className="container">
        <h1>{household.name}</h1>

        <h2>Add Income</h2>

        <input
          type="text"
          placeholder="Income Source"
          value={incomeName}
          onChange={(e) => setIncomeName(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder="Monthly Amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />

        <br />

        <select
          value={incomeOwner}
          onChange={(e) => setIncomeOwner(e.target.value)}
        >
          <option value="Household">
            Household
          </option>

          {household.members.map((member) => (
            <option
              key={member}
              value={member}
            >
              {member}
            </option>
          ))}
        </select>

        <br />

        <button onClick={handleAddIncome}>
          Add Income
        </button>

        <div style={{ marginTop: "24px" }}>
          {household.incomes.map((income, index) => (
            <p key={index}>
              ✅ {income.name}
              {" - "}
              ${income.amount}
              {" - "}
              {income.ownerName}
            </p>
          ))}
        </div>
      </main>
    );
  }

  if (showMembersScreen && household) {
    return (
      <main className="container">
        <h1>{household.name}</h1>

        <h2>Add Members</h2>

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

        <button onClick={() => setShowIncomeScreen(true)}>
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

          <p>
            {household.incomes.length > 0
              ? "✅ Add Income"
              : "⬜ Add Income"}
          </p>

          <p>
            {household.expenses.length > 0
              ? "✅ Add Expenses"
              : "⬜ Add Expenses"}
          </p>

          <p>⬜ Complete First Review</p>

          <br />

          <button onClick={handleContinueSetup}>
            Continue Setup
          </button>

          <br /><br />

          <button onClick={handleReset}>
            Reset Development Data
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
