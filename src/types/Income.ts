export type IncomeOwnerType = "Household" | "Member";

export interface Income {
  name: string;
  amount: number;
  ownerType: IncomeOwnerType;
  ownerName: string;
}