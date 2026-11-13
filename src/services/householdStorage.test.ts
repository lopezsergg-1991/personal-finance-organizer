import type { Household } from "../types/Household";
import { describe, expect, it, beforeEach } from "vitest";
import { saveHousehold, loadHousehold } from "./householdStorage";

describe("householdStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns null when no household exists", () => {
    expect(loadHousehold()).toBeNull();
  });

  it("saves and loads a household with members, incomes, and expenses", () => {
    const household: Household = {
      name: "Test Household",

      members: [
        "Member One",
        "Member Two",
      ],

      incomes: [
        {
          name: "Salary",
          amount: 7000,
          ownerType: "Member",
          ownerName: "Member One",
        },
      ],

      expenses: [
        {
          name: "Mortgage",
          amount: 2500,
          ownerType: "Household",
          ownerName: "Household",
        },
      ],
    };

    saveHousehold(household);

    const loadedHousehold = loadHousehold();

    expect(loadedHousehold).toEqual(household);
  });
});