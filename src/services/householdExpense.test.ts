import { describe, expect, it } from "vitest";

describe("household expense model", () => {
  it("adds expense to a household", () => {
    const household = {
      name: "Test Household",
      members: ["Member One"],
      incomes: [],
      expenses: [],
    };

    household.expenses.push({
      name: "Mortgage",
      amount: 2500,
      ownerType: "Household",
      ownerName: "Household",
    });

    expect(household.expenses).toHaveLength(1);
    expect(household.expenses[0].name).toBe("Mortgage");
  });
});