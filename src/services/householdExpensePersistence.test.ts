import { describe, expect, it } from "vitest";

describe("expense persistence model", () => {
  it("stores expenses inside household", () => {
    const household = {
      name: "Test Household",
      members: ["Sergio"],
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

    expect(household.expenses[0]).toEqual({
      name: "Mortgage",
      amount: 2500,
      ownerType: "Household",
      ownerName: "Household",
    });
  });
});
