import { mealDTO } from "./mealDTO";

type Item = mealDTO;

export interface Section {
  title: Date;
  data: Item[]
}

export const MEAL_COLLECTION = '@daily-diet:meal';

