import { describe, expect, it } from "vitest";
import { getPreviousStep } from "./navigation";

describe("back navigation", () => {
  it("returns from income to members", () => {
    expect(
      getPreviousStep("income")
    ).toBe("members");
  });

  it("returns from expenses to income", () => {
    expect(
      getPreviousStep("expenses")
    ).toBe("income");
  });

  it("returns from members to overview", () => {
    expect(
      getPreviousStep("members")
    ).toBe("overview");
  });
});
