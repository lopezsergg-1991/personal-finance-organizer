import type { Household } from "../types/Household";

export function getCurrentOnboardingStep(
  household: Household
) {
  if (household.members.length === 0) {
    return "members";
  }

  if (household.incomes.length === 0) {
    return "income";
  }

  if (household.expenses.length === 0) {
    return "expenses";
  }

  return "complete";
}
