import { describe, expect, it } from "vitest";
import { getPreviousStep } from "./navigation";

describe("back navigation", () => {
  it("returns members from income", () => {
    expect(
      getPreviousStep("income")
    ).toBe("members");
  });

  it("returns income from expenses", () => {
    expect(
      getPreviousStep("expenses")
    ).toBe("income");
  });

  it("returns overview for unknown steps", () => {
    expect(getPreviousStep("unknown")).toBe("overview");
  });

  it("returns overview from members", () => {
    expect(
      getPreviousStep("members")
    ).toBe("overview");
  });
});
