import type { Household } from "../types/Household";
import { beforeEach, describe, expect, it } from "vitest";
import { loadHousehold, saveHousehold } from "./householdStorage";

describe("household expense persistence", () => {
  beforeEach(() => localStorage.clear());

  it("saves a household-owned expense with its correct amount and owner", () => {
    const household: Household = {
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

    saveHousehold(household);

    expect(loadHousehold()?.expenses).toEqual([{
      name: "Mortgage",
      amount: 2500,
      ownerType: "Household",
      ownerName: "Household",
    }]);
  });
});
