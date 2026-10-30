import { describe, expect, it, beforeEach } from "vitest";
import { saveHousehold, loadHousehold } from "./householdStorage";

describe("householdStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns null when no household exists", () => {
    expect(loadHousehold()).toBeNull();
  });

  it("saves and loads a household", () => {
    const household = {
      name: "Test Household",
      members: ["Member One", "Member Two"],
    };

    saveHousehold(household);

    const loadedHousehold = loadHousehold();

    expect(loadedHousehold).toEqual(household);
  });
});