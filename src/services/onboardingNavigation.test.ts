import { describe, expect, it } from "vitest";
import { getCurrentOnboardingStep } from "./onboarding";

describe("onboarding navigation", () => {
  it("returns members when household has no members", () => {
    expect(
      getCurrentOnboardingStep({
        name: "Test Household",
        members: [],
        incomes: [],
        expenses: [],
      })
    ).toBe("members");
  });

  it("returns income when members exist", () => {
    expect(
      getCurrentOnboardingStep({
        name: "Test Household",
        members: ["Member One"],
        incomes: [],
        expenses: [],
      })
    ).toBe("income");
  });
});
