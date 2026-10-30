import type { Income } from "./Income";
import type { Expense } from "./Expense";

export interface Household {
  name: string;
  members: string[];
  incomes: Income[];
  expenses: Expense[];
}