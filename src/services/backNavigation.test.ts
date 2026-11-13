import { describe, expect, it } from "vitest";
import { getNextStep, getOverviewStep, getPreviousStep } from "./navigation";

describe("onboarding navigation", () => {
  it("goes from income back to members", () => {
    expect(getPreviousStep("income")).toBe("members");
  });

  it("goes from expenses back to income", () => {
    expect(getPreviousStep("expenses")).toBe("income");
  });

  it("goes from members back to household details", () => {
    expect(getPreviousStep("members")).toBe("household");
  });

  it("goes from household details back to overview", () => {
    expect(getPreviousStep("household")).toBe("overview");
  });

  it("handles unknown steps", () => {
    expect(getPreviousStep("unknown")).toBe("overview");
  });

  it("moves forward through the setup screens", () => {
    expect(getNextStep("household")).toBe("members");
    expect(getNextStep("members")).toBe("income");
    expect(getNextStep("income")).toBe("expenses");
  });

  it("supports returning directly to overview from every setup screen", () => {
    expect(getOverviewStep("household")).toBe("overview");
    expect(getOverviewStep("members")).toBe("overview");
    expect(getOverviewStep("income")).toBe("overview");
    expect(getOverviewStep("expenses")).toBe("overview");
  });

  it("returns to overview after expenses", () => {
    expect(getNextStep("expenses")).toBe("overview");
  });
});
