import { mealDTO } from "./meal/mealDTO";

type Item = mealDTO;

export interface Section {
  title: Date;
  data: Item[]
}

export const MEAL_COLLECTION = '@daily-diet:meal';
export const STATISTIC_COLLECTION = '@daily-diet:statistic';

