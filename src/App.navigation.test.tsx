import { act, createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import { loadHousehold, saveHousehold } from "./services/householdStorage";
import type { Household } from "./types/Household";

// React requires this flag when using act with a DOM renderer in tests.
(globalThis as typeof globalThis & {
  IS_REACT_ACT_ENVIRONMENT?: boolean;
}).IS_REACT_ACT_ENVIRONMENT = true;

describe("onboarding screen navigation", () => {
  let container: HTMLDivElement;
  let root: Root;

  const household: Household = {
    name: "Test Household",
    members: ["Member One"],
    incomes: [{
      name: "Salary",
      amount: 7000,
      ownerType: "Member",
      ownerName: "Member One",
    }],
    expenses: [{
      name: "Mortgage",
      amount: 2500,
      ownerType: "Household",
      ownerName: "Household",
    }],
  };

  beforeEach(() => {
    localStorage.clear();
    saveHousehold(household);
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(createElement(App));
    });
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    localStorage.clear();
  });

  const click = (label: string) => {
    const button = Array.from(container.querySelectorAll("button"))
      .find((element) => element.textContent?.trim() === label);
    expect(button, `Expected button: ${label}`).toBeDefined();
    act(() => button!.click());
  };

  const shows = (text: string) => {
    expect(container.textContent).toContain(text);
  };

  it("returns from Members to Overview and can reopen Members", () => {
    click("Edit Members");
    shows("Add Members");
    click("Back to Overview");
    shows("Getting Started");
    click("Edit Members");
    shows("Member One");
  });

  it("returns from Income and Expenses directly to Overview", () => {
    click("View Income");
    shows("Add Income");
    click("Back to Overview");
    shows("Getting Started");

    click("View Expenses");
    shows("Add Expenses");
    click("Back to Overview");
    shows("Getting Started");
  });

  it("navigates backward to household name and preserves saved data", () => {
    click("Edit Members");
    click("Back");
    shows("Edit Household Name");
    const name = container.querySelector("input");
    expect(name?.value).toBe("Test Household");
    click("Back to Overview");
    click("View Income");
    shows("Salary");
    click("View Expenses");
    shows("Mortgage");
    expect(loadHousehold()).toEqual(household);
  });

  it("places Continue, Back, then Back to Overview in that order", () => {
    for (const screen of ["Edit Members", "View Income", "View Expenses"]) {
      click(screen);
      const buttons = Array.from(container.querySelectorAll("button"))
        .map((element) => element.textContent?.trim());
      const continueIndex = buttons.indexOf("Continue");
      const backIndex = buttons.indexOf("Back");
      const overviewIndex = buttons.indexOf("Back to Overview");
      expect(continueIndex).toBeGreaterThanOrEqual(0);
      expect(backIndex).toBeGreaterThan(continueIndex);
      expect(overviewIndex).toBeGreaterThan(backIndex);
      click("Back to Overview");
    }
  });
});
