import { beforeEach, describe, expect, it } from "vitest";
import type { Household } from "../types/Household";
import { loadHousehold, saveHousehold } from "./householdStorage";
import { getCurrentOnboardingStep } from "./onboarding";

describe("onboarding resume after reopening the app", () => {
  beforeEach(() => localStorage.clear());

  it("resumes at income when members were previously saved", () => {
    const household: Household = {
      name: "Test Household",
      members: ["Member One"],
      incomes: [],
      expenses: [],
    };
    saveHousehold(household);
    const restored = loadHousehold();
    expect(restored).not.toBeNull();
    expect(getCurrentOnboardingStep(restored!)).toBe("income");
  });

  it("resumes at expenses when income was previously saved", () => {
    const household: Household = {
      name: "Test Household",
      members: ["Member One"],
      incomes: [{
        name: "Salary",
        amount: 7000,
        ownerType: "Member",
        ownerName: "Member One",
      }],
      expenses: [],
    };
    saveHousehold(household);
    const restored = loadHousehold();
    expect(restored).not.toBeNull();
    expect(getCurrentOnboardingStep(restored!)).toBe("expenses");
  });
});
