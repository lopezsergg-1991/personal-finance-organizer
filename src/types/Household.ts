import type { Income } from "./Income";

export interface Household {
  name: string;
  members: string[];
  incomes: Income[];
}