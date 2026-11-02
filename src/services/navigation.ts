export function getPreviousStep(
  currentStep: string
) {
  if (currentStep === "income") {
    return "members";
  }

  if (currentStep === "expenses") {
    return "income";
  }

  return "overview";
}
