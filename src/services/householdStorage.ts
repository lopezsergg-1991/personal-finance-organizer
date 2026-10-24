import type { Household } from "../types/Household";

export function saveHousehold(household: Household) {
  localStorage.setItem(
    "household",
    JSON.stringify(household)
  );
}

export function loadHousehold(): Household | null {
  const data = localStorage.getItem("household");

  if (!data) {
    return null;
  }

  return JSON.parse(data) as Household;
}
