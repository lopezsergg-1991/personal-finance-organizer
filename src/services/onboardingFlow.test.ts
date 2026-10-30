import { describe, expect, it } from "vitest";

function getNextStep(household: {
  members: string[];
  incomes: unknown[];
  expenses: unknown[];
}) {
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
}

describe("onboarding flow", () => {
  it("routes to members when members are missing", () => {
    expect(
      getNextStep({
        members: [],
        incomes: [],
        expenses: [],
      })
    ).toBe("members");
  });

  it("routes to income when members exist but income does not", () => {
    expect(
      getNextStep({
        members: ["Member One"],
        incomes: [],
        expenses: [],
      })
    ).toBe("income");
  });

  it("routes to expenses when income exists but expenses do not", () => {
    expect(
      getNextStep({
        members: ["Member One"],
        incomes: [{}],
        expenses: [],
      })
    ).toBe("expenses");
  });

  it("routes to complete when onboarding is complete", () => {
    expect(
      getNextStep({
        members: ["Member One"],
        incomes: [{}],
        expenses: [{}],
      })
    ).toBe("complete");
  });
});