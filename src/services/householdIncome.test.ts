import type { Household } from "../types/Household";
import { describe, expect, it } from "vitest";

describe("household income model", () => {
  it("adds income to a household", () => {
    const household: Household = {
      name: "Test Household",
      members: ["Member One"],
      incomes: [],
      expenses: [],
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