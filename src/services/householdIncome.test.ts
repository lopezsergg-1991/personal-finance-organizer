import { describe, expect, it } from "vitest";

describe("household income model", () => {
  it("adds income to a household", () => {
    const household = {
      name: "Test Household",
      members: ["Member One"],
      incomes: [],
    };

    household.incomes.push({
      name: "Salary",
      amount: 7000,
      ownerType: "Member",
      ownerName: "Member One",
    });

    expect(household.incomes).toHaveLength(1);

    expect(household.incomes[0].name).toBe("Salary");
  });
});