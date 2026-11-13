import type { Household } from "../types/Household";
import { beforeEach, describe, expect, it } from "vitest";
import { loadHousehold, saveHousehold } from "./householdStorage";

describe("household income persistence", () => {
  beforeEach(() => localStorage.clear());

  it("saves income ownership and amount across a storage round trip", () => {
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

    saveHousehold(household);
    const loaded = loadHousehold();

    expect(loaded?.incomes).toEqual([{
      name: "Salary",
      amount: 7000,
      ownerType: "Member",
      ownerName: "Member One",
    }]);
  });
});
