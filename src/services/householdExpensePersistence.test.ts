import type { Household } from "../types/Household";
import { beforeEach, describe, expect, it } from "vitest";
import { loadHousehold, saveHousehold } from "./householdStorage";

describe("expense persistence after editing the household", () => {
  beforeEach(() => localStorage.clear());

  it("preserves existing expenses when other household information changes", () => {
    const original: Household = {
      name: "Original Household",
      members: ["Member One"],
      incomes: [],
      expenses: [{
        name: "Mortgage",
        amount: 2500,
        ownerType: "Household",
        ownerName: "Household",
      }],
    };

    saveHousehold(original);
    const stored = loadHousehold();
    expect(stored).not.toBeNull();

    saveHousehold({ ...stored!, name: "Renamed Household" });

    const reloaded = loadHousehold();
    expect(reloaded?.name).toBe("Renamed Household");
    expect(reloaded?.expenses).toEqual(original.expenses);
  });
});
