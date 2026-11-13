import type { OnboardingStep } from "../types/OnboardingStep";

export function getPreviousStep(currentStep: string): OnboardingStep {
  switch (currentStep) {
    case "members": return "household";
    case "income": return "members";
    case "expenses": return "income";
    case "household": return "overview";
    default: return "overview";
  }
}

export function getNextStep(currentStep: OnboardingStep): OnboardingStep {
  switch (currentStep) {
    case "household": return "members";
    case "members": return "income";
    case "income": return "expenses";
    default: return "overview";
  }
}

/** Jump to the household summary from any onboarding step. */
export function getOverviewStep(_currentStep: OnboardingStep): OnboardingStep {
  return "overview";
}
