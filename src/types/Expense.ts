export interface Expense {
  name: string;
  amount: number;
  ownerType: "Household" | "Member";
  ownerName: string;
}