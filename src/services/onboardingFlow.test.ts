import { describe, expect, it } from "vitest";
import { getCurrentOnboardingStep } from "./onboarding";

describe("onboarding flow", () => {
  it("routes to members when members are missing", () => {
    expect(
      getCurrentOnboardingStep({
        name: "Test Household",
        members: [],
        incomes: [],
        expenses: [],
      })
    ).toBe("members");
  });

  it("routes to income when members exist but income does not", () => {
    expect(
      getCurrentOnboardingStep({
        name: "Test Household",
        members: ["Member One"],
        incomes: [],
        expenses: [],
      })
    ).toBe("income");
  });

  it("routes to expenses when income exists but expenses do not", () => {
    expect(
      getCurrentOnboardingStep({
        name: "Test Household",
        members: ["Member One"],
        incomes: [
          {
            name: "Salary",
            amount: 7000,
            ownerType: "Member",
            ownerName: "Member One",
          },
        ],
        expenses: [],
      })
    ).toBe("expenses");
  });

  it("routes to complete when onboarding is complete", () => {
    expect(
      getCurrentOnboardingStep({
        name: "Test Household",
        members: ["Member One"],
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
      })
    ).toBe("complete");
  });
});
